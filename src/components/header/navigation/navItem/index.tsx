import React from "react";

interface NavItemProps {
  text: string;
  href: string;
}

function NavItem({ text, href }: NavItemProps) {
  return (
    <span className="block w-[105px] transition-all hover:border-b-2 hover:border-red hover:border-solid">
      <a
        href=""
        className="w-full h-full text-red-700 text-[0.85rem] text-center"
      >
        {text}
      </a>
    </span>
  );
}

export default NavItem;
