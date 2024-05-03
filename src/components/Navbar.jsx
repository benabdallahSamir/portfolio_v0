import {
  faContactCard,
  faFolder,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const navElement = useRef();
  const [activeLi, setActiveLi] = useState("home");
  return (
    <nav className="flex-ac" ref={navElement}>
      <h1 onClick={() => navElement.current.classList.toggle("active")}>BA</h1>
      <ul className="flex-ac">
        <li className={`${activeLi === "home" ? "active" : ""}`}>
          <a className="flex-ac" href="#" onClick={() => setActiveLi("home")}>
            <FontAwesomeIcon icon={faHome} />
            <p>home</p>
          </a>
        </li>
        <li className={`${activeLi === "about" ? "active" : ""}`}>
          <a
            className="flex-ac"
            href="/#about"
            onClick={() => setActiveLi("about")}
          >
            <FontAwesomeIcon icon={faUser} />
            <p>about me</p>
          </a>
        </li>
        <li className={`${activeLi === "project" ? "active" : ""}`}>
          <a
            className="flex-ac"
            href="/#project"
            onClick={() => setActiveLi("project")}
          >
            <FontAwesomeIcon icon={faFolder} />
            <p>projects</p>
          </a>
        </li>
        <li className={`${activeLi === "contact" ? "active" : ""}`}>
          <a
            className="flex-ac"
            href="/#contact"
            onClick={() => setActiveLi("contact")}
          >
            <FontAwesomeIcon icon={faContactCard} />
            <p>contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
