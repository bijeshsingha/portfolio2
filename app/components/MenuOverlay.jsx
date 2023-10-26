import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ Links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {Links.map((link, index) => (
        <NavLink href={link.path} title={link.title} />
      ))}
    </ul>
  );
};

export default MenuOverlay;