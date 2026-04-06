import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT_SECONDS = 60;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { type } = body;

    if (type !== "booking" && type !== "callback") {
      return new Response(JSON.stringify({ error: "Invalid type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get client IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Create service-role client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Auto-cleanup: delete entries older than 24h
    await supabase
      .from("rate_limits")
      .delete()
      .lt("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString());

    // Check rate limit
    const cutoff = new Date(Date.now() - RATE_LIMIT_SECONDS * 1000).toISOString();
    const { data: recent } = await supabase
      .from("rate_limits")
      .select("id")
      .eq("ip_address", ip)
      .eq("endpoint", type)
      .gte("created_at", cutoff)
      .limit(1);

    if (recent && recent.length > 0) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Try again in a minute." }),
        {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Record rate limit entry
    await supabase.from("rate_limits").insert({ ip_address: ip, endpoint: type });

    // Validate and insert based on type
    if (type === "booking") {
      const { check_in, check_out, guests, name, email, phone, message } = body;

      // Validation
      if (!check_in || !check_out || !email || !phone) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;

      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: "Invalid email format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (!phoneRegex.test(phone)) {
        return new Response(
          JSON.stringify({ error: "Invalid phone format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (message && message.length > 2000) {
        return new Response(
          JSON.stringify({ error: "Message too long" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (new Date(check_out) <= new Date(check_in)) {
        return new Response(
          JSON.stringify({ error: "Check-out must be after check-in" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error } = await supabase.from("booking_inquiries").insert({
        check_in,
        check_out,
        guests: parseInt(guests) || 2,
        name: name || null,
        email,
        phone,
        message: message || null,
      });

      if (error) {
        console.error("Booking insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to save booking" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else {
      // callback
      const { phone, source } = body;

      if (!phone) {
        return new Response(
          JSON.stringify({ error: "Phone is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const phoneRegex = /^\+?[0-9\s\-]{7,20}$/;
      if (!phoneRegex.test(phone)) {
        return new Response(
          JSON.stringify({ error: "Invalid phone format" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const { error } = await supabase.from("callback_requests").insert({
        phone,
        source: source || "exit_intent",
      });

      if (error) {
        console.error("Callback insert error:", error);
        return new Response(
          JSON.stringify({ error: "Failed to save callback" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
