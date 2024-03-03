import Inicio from "./components/pages/Inicio"
import Footer from "./components/common/Footer"
import Menu from "./components/common/Menu"
import './app.css'
import Administrar from "./components/pages/Administrar"
import RegistroProducto from "./components/pages/RegistroProducto"
import Carrusel from "./components/pages/producto/Carrusel";
import 'bootstrap-icons/font/bootstrap-icons.min.css'




function App() {
  return (
    <>
    <Menu/>
   <Carrusel/>
    <Footer/>
    </>
  )
}

export default App
