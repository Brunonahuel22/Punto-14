import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ItemTabla from "./producto/ItemTabla";
import { leerRecetas } from "../helpers/queries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <Container>
        <div className="text-end mt-3">
          {" "}
          <Link className="btn btn-primary" to={"/administrar/crear"}>
            {" "}
            Agregar Receta
          </Link>{" "}
        </div>
        <Table
          responsive="sm md"
          striped
          bordered
          hover
          className="mt-4 text-center"
        >
          <thead>
            <tr>
              <th>Nombre Receta</th>
              <th>Descripcion Breve</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((item) => (
              <ItemTabla key={item.id} receta={item} setRecetas={setRecetas} />
            ))}
          </tbody>
        </Table>
      </Container>
    </main>
  );
};

export default Administrar;
