import { NavLink } from "react-router-dom";

function Navbar({ isMenuOpen, closeMenu }) {
  return (
    <nav
      className={`${
        isMenuOpen ? "flex font-semibold" : "hidden"
      } flex-col gap-6 md:flex md:flex-row xl:gap-16 md:gap-6 justify-between cursor-pointer`}
    >
      <NavLink to="/" onClick={closeMenu}>
        Home
      </NavLink>
      <NavLink to="/WhatWeDo" onClick={closeMenu}>
        What We Do
      </NavLink>
      <NavLink to="/Services" onClick={closeMenu}>
        Services
      </NavLink>
      <NavLink to="/Projects" onClick={closeMenu}>
        Project
      </NavLink>
      <NavLink to="/Blog" onClick={closeMenu}>
        Blog
      </NavLink>
      <NavLink to="/Contact" onClick={closeMenu}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
