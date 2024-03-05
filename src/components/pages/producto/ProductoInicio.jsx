import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductoInicio = ({receta}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card border="dark">
        <Card.Img variant="top"  src={receta.imagen} />
        <Card.Body>
          <Card.Title className="text-center">{receta.nombreReceta}</Card.Title>
          <Card.Text className="text-center">
          {receta.descripcion_breve}
          </Card.Text>
          <div className="text-center">
          <Button variant="primary" >Ver Receta</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductoInicio;
