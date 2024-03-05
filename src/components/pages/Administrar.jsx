import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ItemTabla from "./producto/ItemTabla";

import { leerRecetas } from "../helpers/queries";
import { useEffect, useState } from "react";

const Administrar = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const respuesta = await leerRecetas();
    if (respuesta.status === 200) {
      const dato = await respuesta.json();
      setRecetas(dato);
    }
  };

  return (
    <main className="mainSection container">
     <Container >
     
        <Table responsive="sm" striped bordered hover className="mt-4 text-center" >
          <thead>
            <tr>
              <th>Nombre Receta</th>
              <th>Descripcion Breve</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((item) => (  <ItemTabla key ={item.id} receta ={item} />  ))}
          </tbody>
        </Table>
    
     </Container>
    </main>
  );
};

export default Administrar;
