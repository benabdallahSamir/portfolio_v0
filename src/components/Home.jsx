import React from "react";
import Typewriter from "typewriter-effect";
import mainImg from "../assets/web-dev.png";
import { Tilt } from "react-tilt";
import Btn from "./Btn";
import { faContactCard, faUser } from "@fortawesome/free-regular-svg-icons";
const Home = () => {
  return (
    <section className="home page" id="#">
      <aside>
        <h1>hello there !</h1>
        <h1>
          i'm <span>samir benabdallah</span>
        </h1>
        <Typewriter
          className="h1"
          options={{
            strings: ["i'm web developer", "i,m UI designer"],
            loop: true,
            autoStart: true,
            delay: 70,
            deleteSpeed: 20,
          }}
        />
        <div className="btn-container">
          <Btn title={"Contact Me"} url={"/#contact"} icon={faContactCard} />
          <Btn title={"About Me"} url={"/#about"} icon={faUser} />
        </div>
      </aside>
      <div>
        <Tilt options={{ max: 25, scale: 1 }}>
          <img src={mainImg} alt="" />
        </Tilt>
      </div>
    </section>
  );
};

export default Home;
