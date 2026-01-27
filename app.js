
const SUPABASE_URL = "https://oopqdrvtjaovpwhrdhax.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vcHFkcnZ0amFvdnB3aHJkaGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMTIwMDMsImV4cCI6MjA4NDc4ODAwM30.y8Ni-MOg1qMt-vTKkEnxh0p6JRASZtbPimRCsOTSz5s";

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
