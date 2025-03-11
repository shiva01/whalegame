import { supabase } from '../../lib/supabase'; 

export async function GET() {
  const { data: investment_products, error } = await supabase.from('investment_products').select('*');

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(investment_products, { status: 200 });
}