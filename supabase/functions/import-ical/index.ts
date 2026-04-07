import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

function parseICalDates(icalText: string): { start: string; end: string; summary: string }[] {
  const events: { start: string; end: string; summary: string }[] = [];
  const eventBlocks = icalText.split('BEGIN:VEVENT');

  for (let i = 1; i < eventBlocks.length; i++) {
    const block = eventBlocks[i].split('END:VEVENT')[0];

    const startMatch = block.match(/DTSTART[^:]*:(\d{8})/);
    const endMatch = block.match(/DTEND[^:]*:(\d{8})/);
    const summaryMatch = block.match(/SUMMARY:(.*)/);

    if (startMatch && endMatch) {
      const startStr = startMatch[1];
      const endStr = endMatch[1];
      const start = `${startStr.slice(0, 4)}-${startStr.slice(4, 6)}-${startStr.slice(6, 8)}`;
      const end = `${endStr.slice(0, 4)}-${endStr.slice(4, 6)}-${endStr.slice(6, 8)}`;
      const summary = summaryMatch ? summaryMatch[1].trim() : 'External booking';
      events.push({ start, end, summary });
    }
  }
  return events;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Authenticate admin
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const anonClient = createClient(supabaseUrl, Deno.env.get('SUPABASE_ANON_KEY')!);
    const {
      data: { user },
    } = await anonClient.auth.getUser(token);
    if (!user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check admin role
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleData) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { icalUrl } = await req.json();
    if (!icalUrl || typeof icalUrl !== 'string') {
      return new Response(JSON.stringify({ error: 'icalUrl is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate URL
    try {
      new URL(icalUrl);
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid URL' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Fetch iCal feed
    const icalResponse = await fetch(icalUrl, {
      headers: { 'User-Agent': 'InTheWoods-Calendar/1.0' },
    });

    if (!icalResponse.ok) {
      return new Response(
        JSON.stringify({ error: `Failed to fetch iCal: ${icalResponse.status}` }),
        {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const icalText = await icalResponse.text();
    const events = parseICalDates(icalText);

    // Insert as booking inquiries with status 'external'
    const today = new Date().toISOString().split('T')[0];
    const futureEvents = events.filter((e) => e.end > today);

    let imported = 0;
    for (const event of futureEvents) {
      const { error } = await supabase.from('booking_inquiries').insert({
        check_in: event.start,
        check_out: event.end,
        email: 'import@ical.external',
        phone: '000000000',
        name: event.summary,
        status: 'confirmed',
        message: `Import iCal: ${event.summary}`,
      });
      if (!error) imported++;
    }

    return new Response(
      JSON.stringify({
        success: true,
        totalEvents: events.length,
        imported,
        futureEvents: futureEvents.length,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Import iCal error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
