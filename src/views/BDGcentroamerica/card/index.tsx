import React from "react";

export interface ServiceCardProps {
  img: React.ReactNode;
  title: string;
  linkList: link[];
  widthImage?: string;
  heightImage?: string;
  animation: "left" | "right" | "center";
}

interface link {
  name: string;
  link: string;
}

function ServiceCard({
  animation,
  widthImage = "50px",
  heightImage = "",
  img,
  title,
  linkList,
}: ServiceCardProps) {
  return (
    <div
      className="no-underline text-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-linear mb-10 w-[290px] max-[925px]:!w-[40%] max-[670px]:!w-[95%]"
      data-aos={
        animation == "left"
          ? "fade-left"
          : animation == "right"
          ? "fade-right"
          : animation == "center"
          ? "zoom-in"
          : ""
      }
    >
      <article className="h-[330px] w-full rounded-md">
        <section className=" w-full flex flex-wrap justify-center items-start">
          <div style={{ width: widthImage, height: heightImage }}>{img}</div>
          <h3 className="text-red-700 font-bold text-lg w-full text-center">
            {title}
          </h3>
        </section>

        <section className="mt-4 pb-1 transition-all bg-[#f5f5f5] text-black hover:bg-red-700 hover:text-white rounded-md">
          <ul className="w-full flex flex-wrap justify-center pt-4">
            {linkList.map((link, i) => (
              <li
                key={i}
                className="w-full text-center mb-3 transition-all hover:font-bold"
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default ServiceCard;
