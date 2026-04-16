# GTM + GA4 — konfiguracja bazowa (In The Woods)

## 1) Tag GA4 (page_view dla SPA)

1. W GTM utwórz **Google Tag** (lub „GA4 Configuration”, jeśli używasz starszego UI).
2. Ustaw `Measurement ID` z GA4 (np. `G-XXXXXXX`).
3. Trigger: **Initialization - All Pages**.
4. W tagu wyłącz automatyczne `send_page_view` (dla SPA), jeśli ta opcja jest dostępna.
5. Dodaj osobny tag **GA4 Event**:
   - Event Name: `page_view`
   - Parametry:
     - `page_path` ← `{{DLV - page_path}}`
     - `page_location` ← `{{DLV - page_location}}`
     - `page_title` ← `{{DLV - page_title}}`
   - Trigger: **Custom Event** = `page_view`

## 2) Scroll tracking

1. Utwórz tag **GA4 Event**:
   - Event Name: `scroll`
   - Parametry:
     - `percent_scrolled` ← `{{DLV - percent_scrolled}}`
     - `page_path` ← `{{DLV - page_path}}`
2. Trigger: **Custom Event** = `scroll_depth`.

## 3) Kliknięcia w przyciski rezerwacji

1. Utwórz tag **GA4 Event**:
   - Event Name: `select_content`
   - Parametry:
     - `content_type` = `booking_cta`
     - `item_name` ← `{{DLV - click_text}}`
     - `page_path` ← `{{DLV - page_path}}`
2. Trigger: **Custom Event** = `booking_cta_click`.

## 4) Eventy dataLayer dla kluczowych akcji

Utwórz poniższe tagi GA4 Event z triggerem **Custom Event** o tej samej nazwie:

- `booking_form_submitted`
  - parametry: `check_in`, `check_out`, `guests`
- `callback_click`
  - parametry: `source`, `phone`, `click_text`, `page_path`
- `callback_submitted`
  - parametry: `source`
- `gallery_open`
  - parametry: `gallery_category`, `image_alt`, `image_index`

## 5) Zmienne Data Layer (w GTM)

Utwórz zmienne `Data Layer Variable`:

- `DLV - page_path`
- `DLV - page_location`
- `DLV - page_title`
- `DLV - percent_scrolled`
- `DLV - click_text`
- `DLV - check_in`
- `DLV - check_out`
- `DLV - guests`
- `DLV - source`
- `DLV - phone`
- `DLV - gallery_category`
- `DLV - image_alt`
- `DLV - image_index`

## 6) QA po wdrożeniu

1. Otwórz GTM Preview i stronę.
2. Zweryfikuj eventy:
   - `page_view` przy każdej zmianie routingu,
   - `scroll_depth` dla progów 25/50/75/90,
   - `booking_cta_click` po kliknięciu CTA,
   - `booking_form_submitted` po wysyłce formularza,
   - `callback_click` i `callback_submitted` dla popupu oddzwonienia,
   - `gallery_open` po otwarciu lightboxa zdjęcia.
3. Sprawdź w GA4 DebugView, czy parametry dochodzą poprawnie.
