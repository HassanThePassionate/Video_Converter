import React from "react";
import style from "./hero.module.css";
import HeroTop from "./top_hero/HeroTop";
import Crumb from "./breadCrumb/Crumb";
const Hero = () => {
  return (
    <div className="container">
      <Crumb />
      <div className={style.wrapper}>
        <HeroTop />
      </div>
    </div>
  );
};

export default Hero;
