import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Imagen1 from "../../imagenes/1.jpeg";
import Imagen2 from "../../imagenes/2.webp";
import Imagen3 from "../../imagenes/3.jpeg";

function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="mainSection">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carrusel"
      >
        <Carousel.Item>
          <img
            src={Imagen1}
            alt="First slide"
           
          />
          <Carousel.Caption>
            <h3>¡Descubre nuestras deliciosas recetas!</h3>
            <p>Fáciles de hacer y llenas de sabor</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Imagen2}
            alt="Second slide"
           
          />
          <Carousel.Caption>
            <h3>Sorprende a tu familia con nuestras recetas caseras</h3>
            <p>Ideales para cualquier ocasión</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Imagen3}
            alt="Third slide"
           
          />
          <Carousel.Caption>
            <h3>Explora el mundo de la cocina con nuestras recetas</h3>
            <p>
            Crea platos increíbles en tu propia cocina
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  );
}

export default Carrusel;
