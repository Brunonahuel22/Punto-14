import Inicio from "./components/pages/Inicio";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import "./app.css";
import Administrar from "./components/pages/Administrar";
import RegistroProducto from "./components/pages/RegistroProducto";
import Carrusel from "./components/pages/producto/Carrusel";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import DetallesReceta from "./components/pages/DetallesReceta";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";

function App() {

  const usuario = JSON.parse(sessionStorage.getItem("keyClave"))
  const [usuarioLogueado , setUsuarioLogueado] = useState("");




  return (
      <BrowserRouter>
        <Menu usuarioLogueado = {usuarioLogueado} setUsuarioLogueado = {setUsuarioLogueado} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carrusel /> <Inicio />
              </>
            }
          />
        
          <Route exact path="/login" element={<Login setUsuarioLogueado = {setUsuarioLogueado}  />} />
          <Route exact path="/administrar/*" element={<RutasProtegidas>
            <RutasAdmin></RutasAdmin>
          </RutasProtegidas>} />
        
          <Route exact path="/detalles/:id" element={<DetallesReceta />} />
          <Route exact path="*" element={<Error></Error>} />
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
}

export default App;
