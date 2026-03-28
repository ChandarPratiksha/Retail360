const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

window.supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
