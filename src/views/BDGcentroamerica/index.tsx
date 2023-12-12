import React from "react";
import ServiceCard from "./card";
import ServiciosIcon from "./icons/serviciosIcon";
import OtrosIcon from "./icons/otrosIcon";
import CapacitacionesIcon from "./icons/capacitacionesIcon";

function BDGCentroamerica() {
  return (
    <section className="w-[1200px] pt-[70px] flex flex-wrap justify-center">
      <h2
        className="font-bold text-5xl max-[600px]:text-4xl max-[500px]:text-3xl"
        data-aos="fade-up"
      >
        BDG CENTROAMÉRICA
      </h2>
      <p
        className="w-[80%] mt-10 mb-10 text-red-700 text-center"
        data-aos="fade-down"
      >
        BDG, s.a. es una empresa que ofrece servicios tecnológicos de clase
        mundial mediante el desarrollo, la integración y la implementación de
        alta calidad de soluciones a la medida para nuestros clientes. Somos un
        equipo de profesionales altamente competentes, dedicados a la prestación
        de mejores prácticas a través de la investigación y el desarrollo.
      </p>
      <article className="w-full flex flex-wrap justify-around mb-14">
        <ServiceCard
          img={<ServiciosIcon />}
          title="Servicios"
          animation="left"
          linkList={[
            { name: "Capacitacion", link: "" },
            { name: "Consultoria", link: "" },
            { name: "Desarrollo de software", link: "" },
            { name: "Reclutamiento IT", link: "" },
            { name: "Elearning", link: "" },
            { name: "Outsourcing", link: "" },
          ]}
        />
        <ServiceCard
          img={<OtrosIcon />}
          title="Otros Productos"
          animation="center"
          linkList={[
            { name: "Sigma 7 / BPM - CRM", link: "" },
            { name: "RPA - Robotic Process Automation", link: "" },
            { name: "Atlassian", link: "" },
            { name: "Aplicaciones para Banca", link: "" },
            { name: "Mulesoft", link: "" },
            { name: "Creatio", link: "" },
          ]}
        />
        <ServiceCard
          img={<CapacitacionesIcon />}
          title="Capacitaciones"
          animation="left"
          linkList={[
            { name: "ITIL", link: "" },
            { name: "PMP", link: "" },
            { name: "SCRUM", link: "" },
            { name: "RWD", link: "" },
            { name: "Desarrollo Android", link: "" },
            { name: "Desarrollo IOS", link: "" },
          ]}
        />
      </article>
    </section>
  );
}

export default BDGCentroamerica;
