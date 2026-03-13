const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const icalUrl = 'https://www.airbnb.pl/calendar/ical/1165170256851279014.ics?t=d357c9fac8df4263a54c66683ed05f43';
    
    const response = await fetch(icalUrl);
    if (!response.ok) {
      throw new Error(`iCal fetch failed: ${response.status}`);
    }
    
    const icalText = await response.text();
    
    // Parse VEVENT blocks to extract booked date ranges
    const events: { start: string; end: string; summary: string }[] = [];
    const eventBlocks = icalText.split('BEGIN:VEVENT');
    
    for (let i = 1; i < eventBlocks.length; i++) {
      const block = eventBlocks[i];
      const dtstart = block.match(/DTSTART(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/);
      const dtend = block.match(/DTEND(?:;VALUE=DATE)?:(\d{4})(\d{2})(\d{2})/);
      const summary = block.match(/SUMMARY:(.*)/);
      
      if (dtstart && dtend) {
        events.push({
          start: `${dtstart[1]}-${dtstart[2]}-${dtstart[3]}`,
          end: `${dtend[1]}-${dtend[2]}-${dtend[3]}`,
          summary: summary ? summary[1].trim() : 'Zajęty',
        });
      }
    }

    return new Response(
      JSON.stringify({ success: true, events }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching calendar:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
