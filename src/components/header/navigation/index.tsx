import React from "react";
import NavItem from "./navItem";

function Navigation() {
  return (
    <nav className="flex-1 h-full">
      <ul className="h-full w-full flex flex-wrap items-center justify-around">
        <NavItem href="" text="Sigma 7/BPM-CRM" />
        <NavItem href="" text="Robotic Process Automation" />
        <NavItem href="" text="Atlassian" />
        <NavItem href="" text="Portales E-Commerce" />
        <NavItem href="" text="Aplicaciones para Banca" />
        <NavItem href="" text="Otros Productos" />
        <NavItem href="" text="Servicios" />
      </ul>
    </nav>
  );
}

export default Navigation;
