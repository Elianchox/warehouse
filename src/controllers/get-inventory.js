async function getInventory() {
    const url = 'https://example.com/api/inventory';
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const data = await fetchData(url, options);
        return data;
    } catch (error) {
        console.error('Error fetching inventory:', error);
        throw error;
    }
}