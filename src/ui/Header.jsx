import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleHandler = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className=" flex flex-col gap-4 md:flex-row  text-xs md:text-[0.8rem] md:items-center lg:text-base xl:text-xl lg:font-medium justify-between px-[2rem] md:px-[4rem] py-[3rem]">
      <div className="flex flex-row justify-between items-center ">
        <Logo />
        <button
          className="inline-block md:hidden mt-1 text-xl "
          onClick={() => toggleHandler()}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}

export default Header;
