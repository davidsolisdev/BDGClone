import React from "react";

interface CardVisionMisionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CardVisionMision({ icon, title, description }: CardVisionMisionProps) {
  return (
    <article
      className="w-[45%] h-[500px] flex flex-col flex-wrap justify-star items-start bg-[#f5f5f5] rounded-lg shadow-lg max-[905px]:w-[90%] max-[905px]:mt-7 max-[905px]:h-[400px] max-[905px]:text-sm max-[550px]:text-[0.83rem] max-[550px]:h-[430px]"
      data-aos={title === "Misión" ? "flip-right" : "flip-left"}
    >
      <div className="h-[200px] mt-14 w-full flex flex-wrap justify-center">
        {icon}
        <h2 className="text-red-700 w-full text-center font-bold text-4xl">
          {title}
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-center mt-3">
        <p className="text-red-700 w-[95%] text-center">{description}</p>
      </div>
    </article>
  );
}

export default CardVisionMision;
