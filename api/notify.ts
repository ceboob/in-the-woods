// Vercel Function: e-mail notification to the host about a booking inquiry or a
// callback request submitted on the website. Sends via Resend (https://resend.com).
//
// Vercel environment variables:
//   RESEND_API_KEY  (required) – API key from Resend
//   NOTIFY_EMAIL    (optional) – recipients, comma-separated; default tutinthewood@gmail.com
//   NOTIFY_FROM     (optional) – sender; must be on a domain verified in Resend.
//                                Default "In The Woods <onboarding@resend.dev>", which
//                                Resend only delivers to the Resend account owner's address.
//
// The recipient is fixed server-side, so this endpoint cannot be used to mail anyone else.

const MAX_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE_RE = /^\+?[0-9\s-]{7,20}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function json(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function str(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Notification NOT sent: RESEND_API_KEY is not set.');
    return json(503, { error: 'Notifications not configured' });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) return json(429, { error: 'Too many requests' });

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: 'Invalid JSON' });
  }

  let subject: string;
  let lines: string[];
  let replyTo: string | undefined;

  if (body.type === 'booking') {
    const checkIn = str(body.check_in, 10);
    const checkOut = str(body.check_out, 10);
    const email = str(body.email, 200);
    const phone = str(body.phone, 20);
    if (!DATE_RE.test(checkIn) || !DATE_RE.test(checkOut) || checkOut <= checkIn) {
      return json(400, { error: 'Invalid dates' });
    }
    if (!EMAIL_RE.test(email) || !PHONE_RE.test(phone)) {
      return json(400, { error: 'Invalid contact data' });
    }
    subject = `Nowe zapytanie o rezerwację: ${checkIn} – ${checkOut}`;
    replyTo = email;
    lines = [
      'Nowe zapytanie rezerwacyjne ze strony suprasl.online',
      '',
      `Przyjazd: ${checkIn}`,
      `Wyjazd: ${checkOut}`,
      `Goście: ${str(String(body.guests ?? ''), 3) || '—'}`,
      `Imię: ${str(body.name, 100) || '—'}`,
      `Telefon: ${phone}`,
      `E-mail: ${email}`,
      '',
      `Wiadomość: ${str(body.message, 2000) || '—'}`,
    ];
  } else if (body.type === 'callback') {
    const phone = str(body.phone, 20);
    if (!PHONE_RE.test(phone)) return json(400, { error: 'Invalid phone' });
    subject = `Prośba o telefon: ${phone}`;
    lines = [
      'Nowa prośba o kontakt telefoniczny ze strony suprasl.online',
      '',
      `Telefon: ${phone}`,
      `Źródło: ${str(body.source, 50) || 'exit_intent'}`,
    ];
  } else {
    return json(400, { error: 'Invalid type' });
  }

  const to = (process.env.NOTIFY_EMAIL || 'tutinthewood@gmail.com')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.NOTIFY_FROM || 'In The Woods <onboarding@resend.dev>';

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        subject,
        text: lines.join('\n'),
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });
    if (!res.ok) {
      console.error(`Resend error (${res.status}):`, await res.text());
      return json(502, { error: 'Email provider error' });
    }
  } catch (err) {
    console.error('Notification error:', err);
    return json(502, { error: 'Email provider error' });
  }

  return json(200, { success: true });
}
