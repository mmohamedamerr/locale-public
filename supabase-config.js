// Supabase Configuration
// This file contains sensitive credentials and should NOT be committed to Git
// Copy this file and rename it to supabase-config.js, then add your real credentials

const SUPABASE_URL = 'https://nxjcynetjxlpxsctabpt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54amN5bmV0anhscHhzY3RhYnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzQ3MDMsImV4cCI6MjA3NDY1MDcwM30.wh21USLaI3as1ISn2OEwgCqkxvRycfUo0OCWd55eaQk';

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SUPABASE_URL, SUPABASE_ANON_KEY };
}