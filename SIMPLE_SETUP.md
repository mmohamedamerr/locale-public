# Simple Supabase Setup for Locale

## Overview
Your Locale landing page is now **purely Supabase-powered** - no Google Apps Script needed! This is the simplest possible setup.

## What You Have ✅

- **Frontend**: Direct Supabase integration in `index.html`
- **Database**: Supabase table ready to use
- **No Dependencies**: No Google Apps Script, no complex setup

## Quick Setup (2 minutes)

### 1. Set Up Your Database
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Open your project: `nxjcynetjxlpxsctabpt`
3. Go to **SQL Editor**
4. Copy and paste this SQL:

```sql
-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    suggestion TEXT,
    source VARCHAR(100) DEFAULT 'Locale Landing Page',
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert and read
CREATE POLICY "Allow public insert on waitlist" ON waitlist FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on waitlist" ON waitlist FOR SELECT USING (true);
```

5. Click **Run**

### 2. Test It
1. Open `index.html` in your browser
2. Fill out the waitlist form
3. Submit it
4. Check your Supabase dashboard to see the data

## That's It! 🎉

Your waitlist is now live and collecting emails directly in Supabase. No Google Apps Script, no complex setup - just pure simplicity.

## What Happens When Someone Signs Up

1. User fills out the form on your website
2. Data goes directly to Supabase
3. You see it in your Supabase dashboard
4. User gets a success message

## Viewing Your Data

- **Supabase Dashboard**: Table Editor → `waitlist` table
- **Real-time**: Your website shows live signup counts

## Files You Need

- `index.html` - Your website (already has Supabase)
- `style.css` - Your styling
- `supabase-schema.sql` - Database setup (run once)

## Files You Don't Need

- ~~`google-apps-script.js`~~ - Removed
- ~~`google-apps-script-fixed.js`~~ - Removed
- ~~`GOOGLE_SHEETS_SETUP.md`~~ - Removed

## Troubleshooting

**Form not working?**
- Check browser console for errors
- Verify Supabase URL and key are correct
- Make sure you ran the SQL setup

**No data appearing?**
- Check Supabase RLS policies are set correctly
- Verify the table exists
- Check Supabase logs

## Your Supabase Credentials

- **URL**: `https://nxjcynetjxlpxsctabpt.supabase.co`
- **Anon Key**: Already configured in your HTML

This is the simplest possible setup - just Supabase and your frontend! 🚀
