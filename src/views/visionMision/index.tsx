import React from "react";
import CardVisionMision from "./card";
import VisonIcon from "./icons/visionIcon";
import MisionIcon from "./icons/misionIcon";

function VisionMision() {
  return (
    <section className="w-[1200px] flex flex-wrap justify-around mb-14">
      <CardVisionMision
        icon={<MisionIcon />}
        title="Misión"
        description="Consolidar un equipo de personal altamente competente, dedicado a concebir, desarrollar e integrar soluciones y aplicaciones de tecnología de información con las mejores prácticas de investigación y desarrollo, implementación y metodologías, entrega a tiempo y estándares internacionales, con el fin de mejorar la seguridad, el servicio , la eficiencia y la rentabilidad de las grandes empresas de América Latina."
      />
      <CardVisionMision
        icon={<VisonIcon />}
        title="Visión"
        description="Contribuir al desarrollo empresarial en Latinoamérica, integrando 
soluciones informáticas de clase mundial para los grandes negocios."
      />
    </section>
  );
}

export default VisionMision;
