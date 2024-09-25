import React from "react";
import "./About.css";
import ME from "../../assets/caleb2.png";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know Caleb</h5>
      <h2>About Me</h2>

      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} loading="lazy" alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a
              href="https://www.fullstackacademy.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="about__card"
            >
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>FullStack Academy Graduate</small>
              <small>NOAA Agile Team member</small>
            </a>

            <a
              href="https://github.com/impr3ssionist?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="about__card"
            >
              <AiFillFolderOpen className="about__icon" />
              <small>-</small>
              <small>NOAA Agile Team member</small>
            </a>

            <a
              href="https://github.com/impr3ssionist?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="about__card"
            >
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </a>
          </div>
          <p>
            {" "}
            I'm a software developer and educator living at 9200 feet in the
            Colorado Rockies. I spend my days solving problems and building web
            applications, from back-end programming (PostgreSQL, Express.js,
            Python) to front-end engineering (HTML, CSS, JavaScript, React.js).
            My focus is on requirement analysis, design, and usability.
            Recently, I earned my AWS Cloud Practitioner Certification and have
            been diving into Infrastructure as Code (IaC), serverless
            technologies, and solutions architecting.
          </p>

          <p>
            I’m passionate about web development and data analysis in all its
            forms, and solving problems for everyday living. Aside from web
            development, I enjoy spending my time with my partner and friends,
            climbing mountains, and watching the Seattle Mariners win baseball
            games.
          </p>
          <div className="about__button">
            <a href="'#Contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
