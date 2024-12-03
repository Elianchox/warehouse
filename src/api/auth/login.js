async function loginUser(username, password) {
    const url = 'https://example.com/api/login'; // Reemplaza con la URL de tu API
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    };

    try {
        const data = await fetchData(url, options);
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}