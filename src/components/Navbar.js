import React, { useState, useEffect } from "react";
import { animateScroll as scroll, Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <nav
      scrollNav={scrollNav}
      className="nav"
      style={
        scrollNav ? { background: "#121212" } : { background: "transparent" }
      }
    >
      <div className="nav-container">
        <LinkS to="/" onClick={toggleHome} className="nav-logo">
          Portfolio
        </LinkS>
        <div onClick={toggle} className="mobile-icon">
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li className="custom-nav-item">
            <LinkS
              className="custom-nav-link"
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Home
            </LinkS>
          </li>
          <li className="custom-nav-item">
            <LinkS
              className="custom-nav-link"
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Skills
            </LinkS>
          </li>
          <li className="custom-nav-item">
            <LinkS
              className="custom-nav-link"
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              exact="true"
            >
              Projects
            </LinkS>
          </li>
        </ul>
        <div className="custom-nav-btn">
          <LinkS to="contact" className="custom-nav-btn-link">
            Let's Connect
          </LinkS>
        </div>
      </div>
    </nav>
  );
};
