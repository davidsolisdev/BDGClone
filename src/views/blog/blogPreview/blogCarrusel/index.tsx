"use client";

import React, { useState } from "react";
import PublicationBlog from "../publicationBlog";

const Carousel = () => {
  const slides = [
    {
      image: "https://www.bdgsa.net/wp-content/uploads/2023/03/blog-banca.jpg",
      title: "El software transforma la forma de hacer",
      sector: "Tecnología",
      description:
        "Leyendo un poco de la revolución de la tecnología de información en los negocios, visualice casos como la empresa mas grande del mundo de taxis, no tiene taxis en propiedad, Uber, la empresas con la mayor cantidad de videos en el mundo...",
    },
    {
      image: "https://www.bdgsa.net/wp-content/uploads/2023/03/blog-banca.jpg",
      title: "Sistemas de Banca Electrónica",
      sector: "Tecnología",
      description:
        "¿Qué es un Sistema de Banca Electrónica? Son sistemas que permiten, de forma electrónica para los usuarios de una entidad bancaria, consultar extractos de cuenta, realizar transferencias, y realizar pagos y otras gestiones…",
    },
    {
      image:
        "https://www.bdgsa.net/wp-content/uploads/2023/03/blog-bussines.jpg",
      title: "BPM (Business Process Management)",
      sector: "Servicios",
      description:
        "¿Que es BPM? Herramientas que apoyan la definición y gestión de procesos en una organización. Estos sistemas, o software de Gestión de Procesos de Negocio, apoyan a la definición y mejor administración de procesos en una…",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const totalSlides = slides.length;

  React.useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setVisibleSlides(3);
      } else if (width > 750) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    };

    window.addEventListener("resize", updateVisibleSlides);
    updateVisibleSlides();

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  // Función para obtener los slides a mostrar
  const getSlidesToShow = () => {
    let slidesToShow = [];
    for (let i = 0; i < visibleSlides; i++) {
      let index = (currentSlide + i) % totalSlides;
      slidesToShow.push(slides[index]);
    }
    return slidesToShow;
  };
  return (
    <div
      data-aos="zoom-in-down"
      className="w-full h-auto flex flex-col items-center justify-between"
    >
      <div className="relative flex items-center w-full h-full">
        {" "}
        {/* Contenedor del carrusel a pantalla completa */}
        {/* Botón Anterior */}
        <button
          className="rounded-xl text-7xl text-primary z-10"
          onClick={prevSlide}
        >
          &lt;
        </button>
        {/* Contenedor de los Slides */}
        <div className="flex justify-around w-full h-full overflow-hidden">
          {" "}
          {/* Slides a pantalla completa */}
          {getSlidesToShow().map((slide, index) => (
            <PublicationBlog {...slide} key={index} />
          ))}
        </div>
        {/* Botón Siguiente */}
        <button
          className="rounded-xl text-7xl text-primary z-10"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
