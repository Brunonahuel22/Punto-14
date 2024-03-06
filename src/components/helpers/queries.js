const api = import.meta.env.VITE_API_RECETAS;

//GET
export const leerRecetas = async () => {
    try {
        const respuesta = await fetch(api);

        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

//POST
export const crearRecetas = async (productoNuevo) => {
    try {
        const respuesta = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoNuevo)
        });

        return respuesta;
    } catch (error) {
        console.log(error)
    }
}

//PUT O PACH
//DELETE

//POST
export const borrarRecetas = async (id) => {
    try {
        const respuesta = await fetch(api + '/' + id, {
            method: 'DELETE',

        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}