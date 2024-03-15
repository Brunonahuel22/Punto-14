import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  
  const validarDatos = async (datos) => {
    if (login(datos)) {
      Swal.fire({
        icon: "succes",
        title: "Hola!",
        text: "Bienvenido!",
      });

      navegacion("/administrar");
    } else {
      console.log("error");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Contraseña Incorrecta!",
      });
    }
  };

  return (
    <main className="mainSection">
      <Container>
        <Form
          className="w-50 m-auto mt-5"
          onSubmit={handleSubmit(validarDatos)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "El Correo es un campo Requerido",
                pattern: {
                  value:
                    /^[\w\.-]+@(?:gmail\.com|outlook\.com|yahoo\.com|hotmail\.com)$/,
                  message:
                    "Por favor, introduce un correo electrónico válido con uno de los siguientes dominios: Gmail, Outlook, Yahoo o Hotmail.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "La contraseña es un campo requerido",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "La contraseña no puede tener más de 20 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
