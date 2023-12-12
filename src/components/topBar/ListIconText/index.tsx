import React from "react";
import IconText from "./iconText";
import HomeIcon from "./icons/homeIcon";
import PeopleIcon from "./icons/PeopleIcon";
import PhoneIcon from "./icons/phoneIcon";

function ListIconText() {
  return (
    <ul className="w-auto h-full flex flex-wrap items-center justify-around">
      <IconText text="Home" icon={<HomeIcon />} />
      <IconText text="About" icon={<PeopleIcon />} />
      <IconText text="About" icon={<PhoneIcon />} />
    </ul>
  );
}

export default ListIconText;
