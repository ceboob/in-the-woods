import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://xqtffcnrepvmzizfsprv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxdGZmY25yZXB2bXppemZzcHJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNDI4MzIsImV4cCI6MjA4ODgxODgzMn0.y8OgRDf_PU8mGTlGeKtgRsgcO8PKOdODc8lvnVQOSwI";
const isBrowser = typeof window !== "undefined";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: isBrowser ? window.localStorage : void 0,
    persistSession: isBrowser,
    autoRefreshToken: isBrowser
  }
});
export {
  supabase as s
};
