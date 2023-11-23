const getMostVisitedProducts = async () => {
    const response = await fetch(`${process.env.API_URI}/trends/MCO`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
        },
        cache: 'no-store'
    });

    const data = await response.json();
    return data;
}

export { getMostVisitedProducts }