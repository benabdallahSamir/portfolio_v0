import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactIcons = ({ href, icon }) => {
  return (
    <a href={href} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default ContactIcons;
