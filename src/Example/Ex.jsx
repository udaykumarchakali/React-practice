import React from "react";
import "./ex.css";

function Exam() {
  return (
    <div className="container">

      <header>
        <h1 className="head">Uday Kumar</h1>
        <p>Frontend Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer skilled in HTML, CSS,
          Bootstrap, JavaScript, and React JS.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Python Basic</span>
        </div>
      </section>
      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>Built using React JS.</p>
        </div>

        <div className="card">
          <h3>E-commerce</h3>
          <p>E-commerce is a website or app where people can buy and sell products online.</p>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <button onClick={() => alert("Thanks for visiting my Portfolio!")}>
          Contact Me
        </button>
      </section>

    </div>
  );
}

export default Exam;