

export const GetGlobalMessages = async () => {
    
    try {
        const response = await fetch('http://localhost:4000/api/chat/message', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
           
        });
        
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al obtener mensajes ');
        }

        return data; // Retorna los datos recibidos si la solicitud fue exitosa
    } 
    
    catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
};