
CREATE TABLE public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ip_address text NOT NULL,
  endpoint text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_rate_limits_lookup ON public.rate_limits (ip_address, endpoint, created_at DESC);

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deny anon access" ON public.rate_limits FOR ALL TO anon USING (false) WITH CHECK (false);
CREATE POLICY "Deny authenticated access" ON public.rate_limits FOR ALL TO authenticated USING (false) WITH CHECK (false);
