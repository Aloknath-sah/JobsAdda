
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseClient = (supabaseAccessToken) => {
    console.log("🟢 SupabaseClient received token:", supabaseAccessToken);
    if (supabaseAccessToken) {
        supabase.auth.setSession({ access_token: supabaseAccessToken, refresh_token: null });
    }
    return supabase;
}

export default supabaseClient
        