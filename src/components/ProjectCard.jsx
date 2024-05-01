import React from "react";
import Btn from "./Btn";

const ProjectCard = ({ project }) => {
  const { img, p, title, liveSite, sourceCode } = project;
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{p}</p>
      <section>
        <Btn title={"live site"} url={liveSite} target="_blank" />
        <Btn title={"source code"} url={sourceCode} target="_blank" />
      </section>
    </div>
  );
};

export default ProjectCard;
