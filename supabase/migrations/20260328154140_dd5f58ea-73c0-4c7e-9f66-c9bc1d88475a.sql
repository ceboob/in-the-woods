
ALTER TABLE public.booking_inquiries ADD CONSTRAINT valid_email CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$');
ALTER TABLE public.booking_inquiries ADD CONSTRAINT valid_phone CHECK (phone ~* '^\+?[0-9\s\-]{7,20}$');
ALTER TABLE public.booking_inquiries ADD CONSTRAINT valid_message_length CHECK (message IS NULL OR length(message) <= 2000);
