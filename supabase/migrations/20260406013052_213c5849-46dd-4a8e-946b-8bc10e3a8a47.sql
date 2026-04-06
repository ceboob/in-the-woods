CREATE TABLE public.callback_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'exit_intent',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.callback_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit callback requests"
ON public.callback_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (phone IS NOT NULL AND char_length(phone) BETWEEN 7 AND 20);

CREATE POLICY "Anon cannot read callbacks"
ON public.callback_requests
FOR SELECT
TO anon
USING (false);

CREATE POLICY "Authenticated cannot read callbacks"
ON public.callback_requests
FOR SELECT
TO authenticated
USING (false);