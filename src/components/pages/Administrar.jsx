import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ItemTabla from "./producto/ItemTabla";


const Administrar = () => {
  return (
    <main className="mainSection">
      <Container>
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Nombre Receta</th>
              <th>Descripcion Breve</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
           <ItemTabla/>
          </tbody>
        </Table>
      </Container>
    </main>
  );
};

export default Administrar;
