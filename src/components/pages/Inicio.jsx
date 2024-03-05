import { Container, Row } from "react-bootstrap";
import ProductoInicio from "./producto/ProductoInicio";
import { useEffect, useState } from "react";
import { leerRecetas } from "../helpers/queries";



const Inicio = () => {
  const [recetas, setRecetas] = useState([]);

    useEffect(() => {
      obtenerProductos();
    }, []);

  const   obtenerProductos =async ()=>{
    const respuesta = await leerRecetas()

    if (respuesta.status === 200) {
      const dato = await respuesta.json()
      setRecetas(dato);
    } else{

    }
  }


  return (
  

    <main className="mainSection">
   

      <h3 className="text-center my-3">Nuestras Recetas</h3>

      <Container>
        <Row>
          {
            recetas.map((item) =>  <ProductoInicio key ={item} receta = {item} />)
          }
         
         
        </Row>
      </Container>
    </main>
  );
};

export default Inicio;
