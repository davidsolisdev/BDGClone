import React from "react";
import ListIconText from "./ListIconText";
import SocialIconsList from "./socialIconsList";
import PhoneNumber from "./phoneNumber";
import Languajes from "./languajes";

function TopBar() {
  return (
    <section
      className="w-[1200px] h-[55px] flex flex-wrap items-center justify-between max-[595px]:justify-center"
      data-aos="fade-down"
    >
      <article className="w-auto max-[595px]:hidden">
        <ListIconText />
      </article>
      <article className="flex flex-wrap items-center">
        <SocialIconsList />
        <PhoneNumber />
        <Languajes />
      </article>
    </section>
  );
}

export default TopBar;
