import { createClient } from "@supabase/supabase-js";

let SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4d3NvaXhhZnd0bHhwbXdjb3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4Nzk3NjcsImV4cCI6MTk4OTQ1NTc2N30.B_VUgRq-4h3ePvX6k6s6nDIOG1Z3yecbJN7ybLTf3t8";

const supabaseUrl = "https://ixwsoixafwtlxpmwcosf.supabase.co";
const supabaseKey = SUPABASE_API_KEY;
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
