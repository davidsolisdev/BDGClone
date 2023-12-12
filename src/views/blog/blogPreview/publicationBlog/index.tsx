import React from "react";

interface PublicationBlogProps {
  title: string;
  sector: string;
  description: string;
  image: string;
}

function PublicationBlog({
  title,
  sector,
  description,
  image,
}: PublicationBlogProps) {
  return (
    <div className="w-full mr-5">
      <article className="w-full flex flex-wrap bg-primary rounded-lg">
        <div className="h-[60%] ">
          <img
            height="100%"
            className="h-full rounded-t-lg w-full object-fill object-center"
            src={image}
            alt="content"
          />
        </div>
        <span className="text-black text-2xl font-bold mt-1">{sector}</span>
        <span className="w-full block p-3 pt-2">
          <h2 className="text-2xl text-secondary font-semibold line-clamp-2 hover:text-red-700">
            {title}
          </h2>
          <p className="leading-relaxed text-base text-black mt-5">
            {description}
          </p>
          <p className="w-full text-start text-balck font-bold text-lg underline !self-end">
            Leer más
          </p>
        </span>
      </article>
    </div>
  );
}

export default PublicationBlog;
