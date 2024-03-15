import { Route, Routes } from "react-router-dom";
import Administrar from "../pages/Administrar";
import RegistroProducto from "../pages/RegistroProducto";


 
const RutasAdmin = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Administrar />} />
          <Route
            exact path="/crear"
            element={
              <RegistroProducto editar={false} titulo="Agregar Receta" />
            }
          />
          <Route
           exact  path="/editar/:id"
            element={<RegistroProducto editar={true} titulo="Editar Receta" />}
          />
        </Routes>
    );
};

export default RutasAdmin;