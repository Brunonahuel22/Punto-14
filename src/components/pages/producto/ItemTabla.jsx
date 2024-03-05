import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ItemTabla = ({receta}) => {
    return (
    
          <tr className="text-center">
        <td className="p-3">{receta.nombreReceta}</td>
        <td className="p-3">
          {receta.descripcion_breve}
        </td>
        <td className="p-3">{receta.categoria}</td>
        <td className="p-3">
        <div className="d-flex">
           <Button variant="warning"><i className="bi bi-pencil"></i></Button>
          <Button variant="danger" className="ms-1"><i className="bi bi-trash3-fill"></i></Button>
           </div>
        </td>
      </tr>
    
    );
};

export default ItemTabla;