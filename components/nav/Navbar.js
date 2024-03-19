import React from "react";
import Logo from "./logo/Logo";
import Navlinks from "./navlinks/Navlinks";
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={style.navbar}>
      <div className="container">
        <div className={style.wrapper}>
          <Logo />
          <Navlinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
