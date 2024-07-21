import { useState } from "react";
import "./App.css";
import Hero from "./Hero";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const burger = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div className="main-container bg-dark-black">
      <div className="circle"></div>
      <div className="container">
        {/* <!-- ----------navbar------ --> */}
        <header>
          <nav className="navbar">
            <div className="logo"></div>
            <ul className={`navlist ${isOpen ? "navlist-active" : ""}`}>
              <li>
                <a href="/#" className="navlinks active">
                  Home
                </a>
              </li>
              <li>
                <a href="/#" className="navlinks">
                  Perfume
                </a>
              </li>
              <li>
                <a href="/#" className="navlinks">
                  Deodrent
                </a>
              </li>
              <li>
                <a href="/#" className="navlinks">
                  Body spary
                </a>
              </li>
              <li>
                <a href="/#" className="navlinks">
                  Attar
                </a>
              </li>
            </ul>
            <div className="hambarger" onClick={burger}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </nav>
        </header>
        {/* <!-- ----------hero section------- --> */}
        <Hero />
      </div>
    </div>
  );
}

export default Header;
