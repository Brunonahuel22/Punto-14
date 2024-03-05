import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegistroProducto() {
  return (
    <Container className="mainSection">
      <Form className="my-3 w-75 m-auto ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Receta</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" className="w-25" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Seleccione una categoria</Form.Label>
          <Form.Select aria-label="Default select example">
          <option value="">Seleccione una opcion</option>
            <option value="1">Pastas</option>
            <option value="2">Ensaladas</option>
            <option value="3">Bebidas</option>
            <option value="4">Postres</option>
          </Form.Select>
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion_breve">
          <Form.Label>Descripcion Breve</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-danger">Mensaje de error</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion_amplia">
          <Form.Label>Descripcion Amplia</Form.Label>
          <Form.Control type="text" />
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
