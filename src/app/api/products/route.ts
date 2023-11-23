const getBestSoldProductsByCategory = async (category: string | null) => {

    if (!category) {
        return [];
    }
    const response = await fetch(`${process.env.API_URI}/highlights/MCO/category/${category}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        },
        cache: 'no-store'
    });

    const data = await response.json();
    return data.content;
}

export async function GET(req: Request){
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const data = await getBestSoldProductsByCategory(category);
    return Response.json({data});
}