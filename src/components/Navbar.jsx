import {
  faContactCard,
  faFolder,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const Navbar = () => {
  const navElement = useRef();
  return (
    <nav className="flex-ac" ref={navElement}>
      <h1 onClick={() => navElement.current.classList.toggle("active")}>BA</h1>
      <ul className="flex-ac">
        <li>
          <a className="flex-ac" href="#">
            <FontAwesomeIcon icon={faHome} />
            <p>home</p>
          </a>
        </li>
        <li>
          <a className="flex-ac" href="/#about">
            <FontAwesomeIcon icon={faUser} />
            <p>about me</p>
          </a>
        </li>
        <li>
          <a className="flex-ac" href="/#project">
            <FontAwesomeIcon icon={faFolder} />
            <p>projects</p>
          </a>
        </li>
        <li>
          <a className="flex-ac" href="/#contact">
            <FontAwesomeIcon icon={faContactCard} />
            <p>contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
