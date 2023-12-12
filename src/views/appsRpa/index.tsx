import React from "react";

function AppsRpa() {
  return (
    <section className="mt-14 flex flex-wrap justify-around w-[1200px]">
      <article
        className="w-[95%] flex flex-wrap items-center justify-between mb-14"
        data-aos="fade-up-left"
      >
        <div className="h-full w-[58%] flex flex-col flex-wrap items-center justify-center mt-3">
          <h2 className="w-full text-red-700 text-3xl font-bold">Apps</h2>
          <p className="mt-3">
            Contribuir al desarrollo empresarial en Latinoamérica, integrando
            soluciones informáticas de clase mundial para los grandes negocios.
          </p>
          <p className="w-full text-red-700 mt-3">Ver caso completo</p>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <img
            decoding="async"
            className="w-full h-full object-cover"
            src="https://www.bdgsa.net/wp-content/uploads/2023/03/AppsCAS1.png"
          />
        </div>
      </article>

      <article
        className="w-[95%] flex flex-wrap items-center justify-between mt-16"
        data-aos="fade-up-right"
      >
        <div className="w-[40%] flex items-center justify-center">
          <img
            decoding="async"
            className="w-full h-full object-cover"
            src="https://www.bdgsa.net/wp-content/uploads/2023/03/RPA.png"
          />
        </div>
        <div className="h-full w-[58%] flex flex-col flex-wrap items-center justify-center mt-3">
          <h2 className="w-full text-red-700 text-3xl font-bold">RPA</h2>
          <p className="mt-3">
            Con más de 2,000 robots desarrollados en los últimos cinco años
            hemos logrado que nuestros clientes ahorren más de 4 0 millones de
            dólares. Hoy contamos con clientes en el área de bancos,
            aseguradoras, telefónicas
          </p>
          <p className="w-full text-red-700 mt-3">Ver caso completo</p>
        </div>
      </article>
    </section>
  );
}

export default AppsRpa;
