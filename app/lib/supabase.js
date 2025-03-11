import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = 'https://sotbkrxvrekrosievdfy.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
console.log("Environment Variables:", supabaseKey);
export const supabase = createClient(supabaseUrl, supabaseKey);