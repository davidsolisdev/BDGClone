import React from "react";

interface CarruselTextProps {
  textRed: string;
  textGray: string;
  description: string;
  descriptionRed: string;
}

function CarruselText({
  textRed,
  textGray,
  description,
  descriptionRed,
}: CarruselTextProps) {
  return (
    <section className="w-[600px] absolute left-[100px] max-[945px]:left-[50px] animate__animated animate__backInUp">
      <div className="w-full flex flex-wrap flex-col">
        <span className="w-full text-5xl max-[500px]:text-4xl font-bold text-red-700">
          {textRed}
        </span>
        <span className="w-full text-5xl max-[500px]:text-4xl font-bold text-gray-500 mt-2">
          {textGray}
        </span>
        <span className="w-[30%] h-[10px] bg-red-700"></span>
      </div>
      <p className="text-xl max-[500px]:text-base mt-5 text-gray-500">{description}</p>
      <p className="text-base text-red-700">{descriptionRed}</p>
    </section>
  );
}

export default CarruselText;
