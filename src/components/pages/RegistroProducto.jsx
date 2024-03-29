import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

import {
  crearRecetas,
  editarProducto,
  traerUnaReceta,
} from "../helpers/queries";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RegistroProducto({ titulo, editar }) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const { id } = useParams();

  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatos();
    }
  }, []);

  const cargarDatos = async () => {
    const respuesta = await traerUnaReceta(id);

    if (respuesta.status === 200) {
      const receta = await respuesta.json();

      //agregar los datos de api a los input
      setValue("nombreReceta", receta.nombreReceta);
      setValue("precio", receta.precio);
      setValue("imagen", receta.imagen);
      setValue("categoria", receta.categoria);
      setValue("descripcion_breve", receta.descripcion_breve);
      setValue("descripcion_amplia", receta.descripcion_amplia);
    }
  };

  const datosValidados = async (producto) => {
    if (editar) {
      const respuesta = await editarProducto(producto, id);
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Editado Correctamente",
          showConfirmButton: false,
          timer: 1500,
        });

        navegacion("/administrar");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Ocurrio un Error al editar",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      const respuesta = await crearRecetas(producto);
      if (respuesta.status === 201) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cargado Exitoso!!",
          showConfirmButton: false,
          timer: 1500,
        });
        navegacion("/administrar");
        reset();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error al cargar",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <main className="mainSection">
      <h1 className="text-center py-4">{titulo}</h1>
      <Container>
        <Form
          className="my-3 w-75 m-auto "
          onSubmit={handleSubmit(datosValidados)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Nombre Receta <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              {...register("nombreReceta", {
                required: "Por favor, ingresa el nombre de la receta.",
                minLength: {
                  value: 3,
                  message:
                    "El nombre de la receta debe tener al menos 3 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre de la receta no debe exceder los 50 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="precio">
            <Form.Label>
              Precio <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="number"
              className="w-25"
              {...register("precio", {
                required: "Por favor, ingresa el precio de la receta.",
                min: {
                  value: 100,
                  message: "El minimo en precio es de 100$ .",
                },
                max: {
                  value: 10000,
                  message: "El maximo en precio es de 10.000.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="imagen">
            <Form.Label>
              Imagen <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              {...register("imagen", {
                required: "Por favor, ingresa la URL de la imagen.",
                pattern: {
                  value: /^(ftp|http|https):\/\/[^ "]+$/,
                  message: "Por favor, ingresa una URL válida.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoria">
            <Form.Label>
              Seleccione una categoria <span className="text-danger">*</span>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("categoria", {
                required: "Por favor, selecciona una categoría.",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Pastas">Pastas</option>
              <option value="Ensaladas">Ensaladas</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Postres">Postres</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripcion_breve">
            <Form.Label>
              Descripcion Breve <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              {...register("descripcion_breve", {
                required: "Por favor, ingresa una descripción breve.",
                minLength: {
                  value: 10,
                  message:
                    "La descripción breve debe tener al menos 10 caracteres.",
                },
                maxLength: {
                  value: 100,
                  message:
                    "La descripción breve no debe exceder los 100 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="descripcion_amplia">
            <Form.Label>
              Descripcion Amplia <span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              {...register("descripcion_amplia", {
                required: "Por favor, ingresa una descripción amplia.",
                minLength: {
                  value: 50,
                  message:
                    "La descripción amplia debe tener al menos 50 caracteres.",
                },
                maxLength: {
                  value: 500,
                  message:
                    "La descripción amplia no debe exceder los 500 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_amplia?.message}
            </Form.Text>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Agregar Receta
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  );
}

export default RegistroProducto;
