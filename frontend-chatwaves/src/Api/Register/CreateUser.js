
export const createUser = async (formState) => {
    console.log('Test')
    try {
        const response = await fetch('http://localhost:4000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
        console.log('Test')
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error al registrar el usuario');
        }

        return data; // Retorna los datos recibidos si la solicitud fue exitosa
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
};