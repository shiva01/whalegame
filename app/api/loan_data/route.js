import { supabase } from '../../lib/supabase'; 

export async function GET() {
  const { data: loan_products, error } = await supabase.from('loan_products').select('*');

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(loan_products, { status: 200 });
}