

## Plan: Rate limiting przez Edge Function

### Cel
Ochrona tabel `booking_inquiries` i `callback_requests` przed spamem — max 1 zapytanie na minutę z tego samego IP.

### Architektura

```text
Browser → Edge Function (rate-limit-submit) → sprawdza IP w tabeli rate_limits → INSERT do booking_inquiries / callback_requests
```

### 1. Nowa tabela `rate_limits`
- Kolumny: `id`, `ip_address` (text), `endpoint` (text), `created_at` (timestamptz, default now())
- Index na `(ip_address, endpoint, created_at)` dla szybkich zapytań
- RLS: brak dostępu dla anon/authenticated (tylko service_role)
- Automatyczne czyszczenie starych wpisów (opcjonalnie trigger lub cron)

### 2. Edge Function `rate-limit-submit`
- Endpoint przyjmuje JSON z `type` (`booking` lub `callback`) + dane formularza
- Pobiera IP z nagłówków (`x-forwarded-for` / `x-real-ip`)
- Sprawdza w `rate_limits` czy istnieje wpis z tego IP + endpoint w ostatniej minucie
- Jeśli tak → zwraca 429 Too Many Requests
- Jeśli nie → zapisuje wpis do `rate_limits`, a następnie INSERT do odpowiedniej tabeli (`booking_inquiries` lub `callback_requests`)
- Używa `SUPABASE_SERVICE_ROLE_KEY` do operacji na bazach (omija RLS)
- CORS headers + walidacja danych wejściowych (Zod nie jest wymagany — prosta walidacja)

### 3. Zmiany w komponentach klienta
- **BookingModule.tsx**: zamiana bezpośredniego `supabase.from(...).insert()` na wywołanie `supabase.functions.invoke('rate-limit-submit', { body: { type: 'booking', ...data } })`
- **ExitIntentPopup.tsx**: analogiczna zamiana na `supabase.functions.invoke('rate-limit-submit', { body: { type: 'callback', phone, source } })`
- Obsługa błędu 429 — wyświetlenie komunikatu "Zbyt wiele prób. Spróbuj ponownie za minutę."

### Pliki do utworzenia/edycji
| Plik | Akcja |
|------|-------|
| `supabase/migrations/...rate_limits.sql` | Nowa tabela + indeks + RLS |
| `supabase/functions/rate-limit-submit/index.ts` | Nowa Edge Function |
| `src/components/BookingModule.tsx` | Wywołanie Edge Function zamiast direct insert |
| `src/components/ExitIntentPopup.tsx` | Wywołanie Edge Function zamiast direct insert |

### Bezpieczeństwo
- Dane nie są już wstawiane bezpośrednio z klienta — Edge Function z service_role key kontroluje dostęp
- Walidacja formatu telefonu i emaila duplikowana w Edge Function (defense in depth)
- IP nie jest PII w kontekście rate limitingu (przechowywane tymczasowo)

