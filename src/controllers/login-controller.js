document.getElementById('loggin-button').addEventListener('click', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const data = await loginUser(username, password);
        console.log('Login successful:', data);
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
        console.error('Login failed:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
    }
});