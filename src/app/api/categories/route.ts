const getProductCategories = async () => {

    const response = await fetch(`${process.env.API_URI}/sites/MCO/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });

    const data = await response.json();
    return data;
}

export async function GET(req: Request){
    const data = await getProductCategories();
    return Response.json({data});
}