import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegistroProducto() {
  return (
    <Container className="mainSection">
      <Form className="my-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Receta</Form.Label>
          <Form.Control type="text" placeholder="Ensalada de papas" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" placeholder="Ej: 100"  className="w-25"/>
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" placeholder="ej:url" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion_breve">
          <Form.Label>Descripcion Breve</Form.Label>
          <Form.Control type="text"  />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion_amplia">
          <Form.Label>Descripcion Amplia</Form.Label>
          <Form.Control type="text"/>
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Agregar Receta
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegistroProducto;
