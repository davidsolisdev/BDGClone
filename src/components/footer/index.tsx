import React from "react";
import FacebookIcon from "./icons/facebookIcon";
import InstagramIcon from "./icons/instagramIcon";

function Footer() {
  return (
    <footer className="w-full min-h-[30vh] flex flex-row flex-wrap justify-around items-center">
      <section className="w-full h-full bg-[#15284c] px-5 pt-[60px] pb-10 flex flex-row flex-wrap justify-around items-center rounded-tl-full max-[800px]:!rounded-tl-none">
        <section className="w-[300px] flex flex-wrap justify-center items-center">
          <article className="w-full flex flex-wrap justify-between items-center">
            <img
              src="https://www.bdgsa.net/wp-content/uploads/2023/02/logo_footer_0.png"
              width="95%"
              height="50px"
            />
          </article>
          <div className="w-full h-[30px]"></div>
          <div className="w-full flex flex-wrap justify-around items-center">
            <p className="block text-sm cursor-pointer text-gray-500 hover:text-red-700">
              Blog
            </p>
            <p className="block text-sm cursor-pointer text-gray-500 hover:text-red-700">
              Noticias
            </p>
            <p className="block text-sm cursor-pointer text-gray-500 hover:text-red-700">
              Casos
            </p>
            <p className="block text-sm cursor-pointer text-gray-500 hover:text-red-700">
              Cita
            </p>
          </div>
        </section>
        <section className="w-[250px] mb-5 flex flex-wrap justify-around">
          <div className="w-[95%] flex flex-wrap justify-around">
            <p className="text-xl text-gray-500">Síguenos</p>
            <div className="w-full flex flex-wrap justify-center mt-5 mb-5">
              <FacebookIcon />
              <span className="w-[10px]"></span>
              <InstagramIcon />
            </div>
            <p className="w-full text-center text-sm text-gray-500">
              Contáctenos: ventas@bdgsa.net
            </p>
            <p className="w-full text-center text-sm text-gray-500">
              Plazas: talentodigital@bdgsa.net
            </p>
            <p className="w-full text-center text-sm text-gray-500">
              Suscríbete: ventas@bdgsa.net
            </p>
            <a
              className="w-full text-center text-sm text-blue-600 mt-5"
              href="Tel: 2313-3600"
            >
              Tel: 2313-3600
            </a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
