import React from "react";
import styles from "./styles.module.css";

interface IconTextProps {
  icon: React.ReactNode;
  text: string;
}

function IconText(props: IconTextProps) {
  return (
    <li className={`h-full ml-4 ${styles.text_icon}`}>
      <a
        href=""
        className="w-full h-full flex flex-wrap items-center justify-center outline-none text-white"
      >
        <span className="">{props.icon}</span>
        <span className="flex-1 flex items-center ml-2">{props.text}</span>
      </a>
    </li>
  );
}

export default IconText;
