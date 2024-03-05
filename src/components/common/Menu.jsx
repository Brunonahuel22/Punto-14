import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

const Menu = () => {
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
            <NavLink to="/" exact className="nav-link">Inicio</NavLink>
            <NavLink to= "/administrar" exact className="nav-link ">Administrar</NavLink>
            <NavLink to={"/Registro"} exact className={"nav-link"} >Registro</NavLink>
            <NavLink to={"/login"} exact  className={"nav-link"}>Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
