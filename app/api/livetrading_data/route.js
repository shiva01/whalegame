export async function POST(request) {
  const body = await request.json();

  try {
    const response = await fetch('https://slp.alphafirst.ai/v1/slp/ext/public/report/return/search/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    const resultList = data.data.resultList;
    const firstItem = resultList[0]; 
    const lastItem = resultList[resultList.length - 1];
    const runningDays = Math.floor((lastItem.actionMs - firstItem.actionMs) / (1000 * 60 * 60 * 24)); 
    const netValue = (lastItem.returnRate + 1).toFixed(4);
    const apr = (Math.pow(netValue, 365 / runningDays) - 1).toFixed(3);
    const returnJson = {
      runningDays,
      netValue,
      apr,
      sharpeRatio: lastItem.sharpeRatio.toFixed(3)
    };    
    return new Response(JSON.stringify(returnJson), { 
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('API proxy error:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
