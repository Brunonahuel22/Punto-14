import { Container, Row } from "react-bootstrap";
import ProductoInicio from "./producto/ProductoInicio";

const Inicio = () => {
  return (
    <main className="mainSection">
      <div>
        <img
          className="banner "
          src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg"
          alt="fondo de recetas saludables"
        />
      </div>

      <h3 className="text-center my-3">Nuestras Recetas</h3>

      <Container>
        <Row  >
            <ProductoInicio/>
            <ProductoInicio/>
            <ProductoInicio/>
            
        </Row>
      </Container>
    </main>
  );
};

export default Inicio;
