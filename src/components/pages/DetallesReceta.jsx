import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { leerRecetas } from "../helpers/queries";
import { Container } from "react-bootstrap";

const DetallesReceta = () => {
  const parametro = useParams();
  const id = parametro.id;

  const [producto, setProducto] = useState({});

  useEffect(() => {
    datosApis();
  }, []);

  const datosApis = async () => {
    const respuesta = await leerRecetas();

    if (respuesta.status === 200) {
      const dato = await respuesta.json();

      setProducto(dato.find((elemento) => elemento.id === id));
    }
  };

  return (
    <main className="mainSection">
      <Container>
        <article className="detalle-receta">
          <h1 className="text-center py-4 ">{producto.nombreReceta}</h1>
          <p className="text-center"> {producto.descripcion_breve}. </p>
          <div className="contenedor-imagen-detalle">
            <img src={producto.imagen} alt="imagen de la receta" />
          </div>
          <p>{producto.descripcion_larga} </p>
        </article>
      </Container>
    </main>
  );
};

export default DetallesReceta;
