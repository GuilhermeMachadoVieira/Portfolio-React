import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

export default function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nome">
          <h1 className="titleHeader" onClick={scrollToTop}>
            Guilherme
          </h1>
        </div>
        <div className="header_menu">
          <Link to="secaoAbout" smooth={true} duration={500}>
            <button className="buttonAbout">About me</button>
          </Link>
          <Link to="secaoServices" smooth={true} duration={500}>
            <button className="buttonAbout">Services</button>
          </Link>
          <Link to="secaoContactMe" smooth={true} duration={500}>
            <button className="buttonAbout">Contact me</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
