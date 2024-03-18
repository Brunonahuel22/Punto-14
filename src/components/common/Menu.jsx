import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = ({usuarioLogueado,setUsuarioLogueado}) => {
  const navegacion = useNavigate()
const cerrarSesion = ()=>{
  sessionStorage.removeItem('keyClave');
  //resetear el state
  setUsuarioLogueado('')
  //mandar al login luego de cerrar sesion

  navegacion('/login');
}

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="w-25">
          <img
            src="https://i.pinimg.com/originals/4a/1b/fc/4a1bfc3dbb339ef6200e7358eef85cb8.jpg"
            alt="logo de la pagina"
            className="img-fluid  logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <NavLink end to="/" className="nav-link">Inicio</NavLink>
          <NavLink end to={"/Registro"}  className={"nav-link"} >Registro</NavLink>
          {
          (usuarioLogueado !== "")?
          <>
          <NavLink end to= "/administrar" className="nav-link ">Administrar</NavLink>
          <button className="nav-link" onClick={cerrarSesion}>Cerrar Sesion</button>
          </>:<NavLink end to={"/login"}   className={"nav-link"}>Login</NavLink>
           }


          
           
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
