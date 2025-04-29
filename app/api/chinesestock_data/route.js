import { supabase } from '../../lib/supabase'; 

export async function GET() {
  const { data: chinese_stocks, error } = await supabase.from('chinese_stocks').select('*');

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(chinese_stocks, { status: 200 });
}