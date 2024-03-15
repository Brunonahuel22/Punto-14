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

//GET de un producto


export const traerUnaReceta = async (id)=>{
    try {
        const respuesta = await fetch(api+'/'+id);
        return respuesta
    } catch (error) {
        console.log(error);
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

export const editarProducto = async (productoEditado, id) => {
    try {
        const respuesta = await fetch(api + '/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productoEditado)

            
        });
        return respuesta;
    } catch (error) {
        console.log(error)
    }
}




//DELETE
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


// para admin
 
export const userAdmin = {
    email:'admin@gmail.com',
    password:'123456',
};


export const login = (usuario)=>{
    if(usuario.email === userAdmin.email && usuario.password === userAdmin.password){
        sessionStorage.setItem('keyClave' ,JSON.stringify(usuario.email))
        return true;
    }else{
        return false;
    }

}