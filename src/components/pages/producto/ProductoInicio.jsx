import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const ProductoInicio = ({ receta }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card border="dark">
        <Card.Img variant="top" src={receta.imagen} />
        <Card.Body>
          <Card.Title className="text-center">{receta.nombreReceta}</Card.Title>
          <Card.Text className="text-center">
            {receta.descripcion_breve}
          </Card.Text>
          <div className="text-center">
            <NavLink className={"btn btn-primary"} to={`/detalles/${receta.id}`}>
              Ver Receta
            </NavLink>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductoInicio;
