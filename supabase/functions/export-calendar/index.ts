import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: bookings, error } = await supabase
      .from('booking_inquiries')
      .select('id, check_in, check_out, name, created_at')
      .order('check_in', { ascending: true });

    if (error) throw error;

    const formatDate = (dateStr: string) => dateStr.replace(/-/g, '');
    const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

    let ical = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//In The Woods//Booking Calendar//PL',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:In The Woods - Rezerwacje',
    ];

    for (const b of (bookings || [])) {
      ical.push(
        'BEGIN:VEVENT',
        `DTSTART;VALUE=DATE:${formatDate(b.check_in)}`,
        `DTEND;VALUE=DATE:${formatDate(b.check_out)}`,
        `DTSTAMP:${now}`,
        `UID:${b.id}@suprasl.online`,
        `SUMMARY:Zajęty - ${b.name || 'Rezerwacja'}`,
        'STATUS:CONFIRMED',
        'END:VEVENT',
      );
    }

    ical.push('END:VCALENDAR');

    return new Response(ical.join('\r\n'), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'attachment; filename="inthewoods.ics"',
      },
    });
  } catch (error) {
    console.error('Error generating ICS:', error);
    return new Response('Error generating calendar', {
      status: 500,
      headers: corsHeaders,
    });
  }
});
