import React from "react";
import BlogCarousel from "./blogPreview/blogCarrusel";

function Blog() {
  return (
    <section className="w-[1200px] mt-[80px] flex flex-wrap justify-center mb-14">
      <h2
        className="font-bold text-5xl text-center w-full mb-10"
        data-aos="fade-down"
      >
        Blog
      </h2>
      <BlogCarousel />
    </section>
  );
}

export default Blog;
