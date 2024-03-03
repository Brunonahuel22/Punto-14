import Button from "react-bootstrap/Button";

const ItemTabla = () => {
    return (
        <tr className="text-center">
        <td>Ensalada de Quinoa con Vegetales Asados</td>
        <td>
          Una vibrante ensalada de quinoa con vegetales asados, fresca y
          deliciosa.
        </td>
        <td>Ensalada</td>
        <td>
           <div className="d-flex">
           <Button variant="warning">E</Button>
          <Button variant="danger" className="ms-1">D</Button>
           </div>
        </td>
      </tr>
    );
};

export default ItemTabla;