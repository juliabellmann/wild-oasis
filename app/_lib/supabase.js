
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


// const supabaseUrl = 'https://wcvyfbyafyetrnwcohno.supabase.co';
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdnlmYnlhZnlldHJud2NvaG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1MzY3MjgsImV4cCI6MjA0NTExMjcyOH0.5QXWWh-bL6BHKeLuSUSo5m4cEc_v7JZvcs616Pqg8T0";
// const supabase = createClient(supabaseUrl, supabaseKey);
// export default supabase;