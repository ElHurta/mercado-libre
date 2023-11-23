const getItem = async (id: string | null) => {
    const response = await fetch(`${process.env.API_URI}/items/?ids=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        },
        cache: 'no-store'
    });

    const data = await response.json();
    return data[0].body;
}

export async function GET(req: Request){
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('ids')
    const data = await getItem(id);
    return Response.json({data});
}