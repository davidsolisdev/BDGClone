"use client";
import React from "react";
import Logo from "./logo";
import ReclutingButton from "./reclutingButton";
import Navigation from "./navigation";
import ButtonDrawer from "./ButtonDrawer";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-[75px] w-full bg-[#e9e9e9] flex flex-wrap justify-center items-center z-20"
      style={
        isScrolled
          ? { position: "sticky", top: "0", left: "0", right: "0" }
          : {}
      }
    >
      <header className="w-[1200px] h-full flex flex-wrap items-center justify-between">
        <Logo />
        <section className="ml-7 flex-1 flex flex-wrap items-center max-[1140px]:!hidden">
          <Navigation />
          <ReclutingButton />
        </section>
        <ButtonDrawer />
      </header>
    </div>
  );
}

export default Header;
