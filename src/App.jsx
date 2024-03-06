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




function App() {
  return (
    <>
    
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carrusel /> <Inicio />
              </>
            }
          />
          <Route path="/administrar" element = {<Administrar/>} />
          <Route path="/registro" element = {<RegistroProducto/>} />
          <Route path="/detalles/:id" element = {<DetallesReceta/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
