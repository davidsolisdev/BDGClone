"use client";
import React, { useState } from "react";
import CarruselText from "./carruselTexts/carruselText";

interface CarouselProps {
  height?: string;
}

const Carousel = ({
  height = "h-[80vh] max-[1500px]:h-[80vh] max-[1280px]:h-[80vh] max-[1140px]:h-[75vh] max-[1040px]:h-[70vh] max-[980px]:h-[65vh] max-[900px]:h-[60vh] max-[840px]:h-[55vh] max-[800px]:h-[50vh] max-[750px]:h-[45vh] max-[680px]:h-[40vh] max-[640px]:h-[35vh]",
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://www.bdgsa.net/wp-content/uploads/2023/02/Slider-1.png",
    "https://www.bdgsa.net/wp-content/uploads/2023/02/Slider-1.png",
    "https://www.bdgsa.net/wp-content/uploads/2023/02/Slider-1.png",
  ];

  const texts = [
    {
      textRed: "Mejora tu proceso",
      textGray: "de automatizacion",
      description:
        "conoce 10 razones importantes porque debemos de autimatizar los procesos de nuestra empresa",
      descriptionRed: "Haz una cita con nuestros expertos",
    },
    {
      textRed: "Buscando",
      textGray: "la excelencia",
      description:
        "La gestion de proces es una estrategia que busca el exito de su organizacion a traves de la excelencia en modelos de procesos, muchos de ellos, automatizables.",
      descriptionRed: "Haz una cita con nuestros expertos",
    },
    {
      textRed: "Mejora tu proceso",
      textGray: "de automatizacion",
      description:
        "conoce 10 razones importantes porque debemos de autimatizar los procesos de nuestra empresa",
      descriptionRed: "Haz una cita con nuestros expertos",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${height}`}
      style={{ width: "100%" }}
      data-aos="zoom-in"
    >
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={images[activeIndex]}
          alt="Carousel Image"
          className="object-fill w-full h-full"
        />
        <CarruselText {...texts[activeIndex]} />
      </div>
    </div>
  );
};

export default Carousel;

/*
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
*/
