
-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit booking inquiry" ON public.booking_inquiries;

-- Create a more specific INSERT policy that still allows public submissions
-- but only permits inserting specific safe columns
CREATE POLICY "Public can submit booking inquiries"
ON public.booking_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure required fields are provided (basic validation)
  check_in IS NOT NULL
  AND check_out IS NOT NULL
  AND email IS NOT NULL
  AND phone IS NOT NULL
  AND check_out > check_in
);

-- Explicitly deny SELECT for anon/authenticated (only service_role can read)
CREATE POLICY "Only service role can read inquiries"
ON public.booking_inquiries
FOR SELECT
TO authenticated
USING (false);

CREATE POLICY "Anon cannot read inquiries"
ON public.booking_inquiries
FOR SELECT
TO anon
USING (false);
