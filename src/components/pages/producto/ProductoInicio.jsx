import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductoInicio = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card border="dark">
        <Card.Img variant="top" src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Card.Body>
          <Card.Title className="text-center">Ensalada de Quinoa con Vegetales Asados</Card.Title>
          <Card.Text className="text-center">
          Una vibrante ensalada de quinoa con vegetales asados, fresca y deliciosa.
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
