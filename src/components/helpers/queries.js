const api =   import.meta.env.VITE_API_RECETAS;

//GET
export const leerRecetas = async () =>{
    try {
        const respuesta = await fetch(api);
      
        return respuesta;
    } catch (error) {
        console.log(error)
    }
 }

//POST
//PUT O PACH
//DELETE