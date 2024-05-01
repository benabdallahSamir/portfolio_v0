import React from "react";
import Btn from "./Btn";
import SkillsCard from "./SkillsCard";
import {
  faBootstrap,
  faCss3,
  faFigma,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about page" id="about">
      <article>
        <h1>who i am</h1>
        <p>
          Hello there! I'm <span>benabdallah samir</span> , a passionate web
          developer with a love for turning ideas into captivating digital
          experiences. With a background in [mention any relevant education or
          experience], I bring a blend of creativity and technical expertise to
          every project I undertake.
          <br /> <br />
          What sets me apart is my dedication to understanding the unique needs
          of each project and delivering tailored solutions that exceed
          expectations. From concept to execution, I work closely with my
          clients to ensure every pixel and line of code reflects their vision
          and brand identity.
          <br /> <br />
          Outside of coding, you can find me staying up-to-date with the latest
          industry trends, experimenting with new technologies, or immersing
          myself in the vibrant tech community. I believe in the power of
          collaboration and continuous learning, always seeking new ways to push
          the boundaries of what's possible in web development.
          <br /> <br />
          If you're ready to elevate your online presence and bring your ideas
          to life, I'm here to help. Let's embark on this journey together and
          create something remarkable in the digital landscape.
        </p>
        <Btn title={"download my cv"} />
      </article>
      <div className="skills">
        <h1>My Skills</h1>
        <div className="container">
          <SkillsCard icon={faBootstrap} />
          <SkillsCard icon={faFigma} />
          <SkillsCard icon={faJava} />
          <SkillsCard icon={faJs} />
          <SkillsCard icon={faHtml5} />
          <SkillsCard icon={faCss3} />
          <SkillsCard icon={faNodeJs} />
          <SkillsCard icon={faGithub} />
          <SkillsCard icon={faGit} />
          <SkillsCard icon={faDatabase} />
        </div>
      </div>
    </div>
  );
};

export default About;
