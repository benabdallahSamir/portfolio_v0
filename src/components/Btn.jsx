import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Btn = ({ title, url, icon }) => {
  return (
    <a href={url} className="btn">
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </a>
  );
};

export default Btn;
