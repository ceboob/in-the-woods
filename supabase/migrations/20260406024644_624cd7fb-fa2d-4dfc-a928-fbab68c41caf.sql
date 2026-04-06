
-- 1. Add status column to booking_inquiries
ALTER TABLE public.booking_inquiries
ADD COLUMN status text NOT NULL DEFAULT 'new';

-- 2. Create app_role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Security definer function for role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- 4. RLS policies for user_roles
CREATE POLICY "Admins can read user_roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 5. Allow admins to SELECT booking_inquiries (update existing restrictive policies)
CREATE POLICY "Admins can read booking inquiries"
ON public.booking_inquiries FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 6. Allow admins to UPDATE booking_inquiries status
CREATE POLICY "Admins can update booking status"
ON public.booking_inquiries FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
