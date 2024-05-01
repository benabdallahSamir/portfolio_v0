import {
  ageCalculator,
  huddleLandingPage,
  sunnysideAgency,
} from "../assets/assets.js";
import ProjectCard from "./ProjectCard.jsx";
const projects = [
  {
    title: "age calculator",
    liveSite: "https://samirbenabdallah.github.io/age-calculator",
    sourceCode: "https://github.com/samirBenabdallah/age-calculator.git",
    p: "",
    img: ageCalculator,
  },
  {
    title: "sunnyside agency",
    liveSite:
      "https://samirbenabdallah.github.io/Sunnyside-agency-landing-page/",
    sourceCode:
      "https://github.com/samirBenabdallah/Sunnyside-agency-landing-page.git",
    p: "",
    img: sunnysideAgency,
  },
  {
    title: "huddle landing page",
    liveSite:
      "https://samirbenabdallah.github.io/Huddle-landing-page-with-curved-sections/",
    sourceCode:
      "https://github.com/samirBenabdallah/Huddle-landing-page-with-curved-sections.git",
    p: "",
    img: huddleLandingPage,
  },
  // {
  //   title: "",
  //   liveSite: "",
  //   sourceCode: "",
  //   p: "",
  //   img: "",
  // },
  // {
  //   title: "",
  //   liveSite: "",
  //   sourceCode: "",
  //   p: "",
  //   img: "",
  // },
];

const Project = () => {
  return (
    <div className="page project" id="project">
      <h1>my projects : </h1>
      <div className="container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
