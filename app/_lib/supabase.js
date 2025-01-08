
import { createClient } from '@supabase/supabase-js';

// URL und KEY werden so aus der env.local Datei ausgelesen und es gibt kein "leak"
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);