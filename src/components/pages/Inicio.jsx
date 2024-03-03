import { Container, Row } from "react-bootstrap";
import ProductoInicio from "./producto/ProductoInicio";



const Inicio = () => {
  return (
    <main className="mainSection">
      <div>
      
      </div>

      <h3 className="text-center my-3">Nuestras Recetas</h3>

      <Container>
        <Row>
          <ProductoInicio />
          <ProductoInicio />
          <ProductoInicio />
        </Row>
      </Container>
    </main>
  );
};

export default Inicio;
