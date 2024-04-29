import React from "react";

const Btn = ({ title, url, icon }) => {
  return (
    <a href={url} className="btn">
      {title}
    </a>
  );
};

export default Btn;
