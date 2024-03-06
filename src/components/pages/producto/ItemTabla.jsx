import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { borrarRecetas, leerRecetas } from "../../helpers/queries";
import { NavLink } from "react-router-dom";

const ItemTabla = ({ receta, setRecetas }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: `Estas Seguro de eliminar ${receta.nombreReceta}?`,
      text: "No se puede revertir operacion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetas(receta.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: "La operacion fue realizada con exito!",
            icon: "success",
          });

          const respuestaNuevoProducto = await leerRecetas();

          if (respuestaNuevoProducto.status === 200) {
            const nuevosProductos = await respuestaNuevoProducto.json();
            setRecetas(nuevosProductos);
          }
        } else {
          Swal.fire({
            title: "Ocurrio un problema",
            text: "La operacion no fue realizada ",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr className="text-center">
      <td className="p-3">{receta.nombreReceta}</td>
      <td className="p-3">{receta.descripcion_breve}</td>
      <td className="p-3">{receta.categoria}</td>
      <td className="p-3">
        <div className="d-flex justify-content-center">
          <NavLink  to={'/editar'} className={'btn btn-warning'}>
            <i className="bi bi-pencil"></i>
          </NavLink>
          <Button variant="danger" className="ms-1" onClick={eliminarProducto}>
            <i className="bi bi-trash3-fill"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemTabla;
