import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Btn = ({ title, url, icon, target="_self" }) => {
  return (
    <a href={url} className="btn" target={target}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </a>
  );
};

export default Btn;
