-- Simple Supabase Setup for Locale Waitlist
-- Copy and paste this into your Supabase SQL Editor

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    suggestion TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert and read (for your website)
CREATE POLICY "Allow public insert on waitlist" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on waitlist" ON waitlist FOR SELECT USING (true);

-- That's it! Your waitlist is ready to use.
