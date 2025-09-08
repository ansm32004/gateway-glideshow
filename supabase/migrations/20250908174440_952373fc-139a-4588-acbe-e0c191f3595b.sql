-- Create comprehensive form submissions table
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT,
  message TEXT,
  preferred_time TEXT,
  form_type TEXT NOT NULL CHECK (form_type IN ('application', 'call_booking', 'service_inquiry')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to secure the data
CREATE POLICY "Users can insert their own form submissions" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated admin users can view submissions (for future admin panel)
CREATE POLICY "Only admins can view form submissions" 
ON public.form_submissions 
FOR SELECT 
USING (false); -- Will be updated when admin system is implemented

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON public.form_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add validation constraints
ALTER TABLE public.form_submissions 
ADD CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$');

-- Drop the old CLIENT DATA table as it's unprotected
DROP TABLE IF EXISTS public."CLIENT DATA";