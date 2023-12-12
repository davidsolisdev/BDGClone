import React from "react";

function NewsLetter() {
  return (
    <section className="w-[1200px] mt-16 mb-14 flex flex-wrap justify-center">
      <h2
        className="font-bold text-red-700 w-full text-center text-4xl mb-16"
        data-aos="fade-down"
      >
        Recibe información clave de la industria
      </h2>
      <article
        className="w-[400px] max-[500px]:w-[290px] flex flex-wrap justify-center"
        data-aos="fade-up"
      >
        <div className="w-full flex justify-center">
          <input
            type="text"
            className="w-full h-[35px] border border-solid border-gray-600 pl-3 rounded-md mb-5"
            placeholder="Nombre"
          />
        </div>
        <div className="w-full flex justify-center">
          <input
            type="text"
            className="w-full h-[35px] border border-solid border-gray-600 pl-3 rounded-md mb-5"
            placeholder="Apellido"
          />
        </div>
        <div className="w-full flex justify-center">
          <input
            type="text"
            className="w-full h-[35px] border border-solid border-gray-600 pl-3 rounded-md mb-5"
            placeholder="Correo"
          />
        </div>
        <button className="bg-red-700 text-white p-2 px-5 rounded-lg text-lg">
          Enviar
        </button>
      </article>
    </section>
  );
}

export default NewsLetter;
