import "./About.css";
import ME from "../../assets/caleb2.png";
import { FaAward } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";

const aboutData = {
  description: [
    "I'm a software developer and educator living at 9200 feet in the Colorado Rockies. I spend my days solving problems and building web applications, from back-end programming (PostgreSQL, Express.js, Python) to front-end engineering (HTML, CSS, JavaScript, React.js). My focus is on requirement analysis, design, and usability. Recently, I earned my AWS Cloud Practitioner Certification and have been diving into Infrastructure as Code (IaC), serverless technologies, and solutions architecting.",
    "I’m passionate about web development and data analysis in all its forms, and solving problems for everyday living. Aside from web development, I enjoy spending my time with my partner and friends, climbing mountains, and watching the Seattle Mariners win baseball games.",
  ],

  cards: [
    {
      id: 1,
      href: "https://www.fullstackacademy.com/about",
      icon: FaAward,
      title: "Experience",
      details: ["Fullstack Academy Graduate", "NOAA Agile Team member"],
    },
    {
      id: 2,
      href: "https://github.com/impr3ssionist?tab=repositories",
      icon: AiFillFolderOpen,
      title: "Projects",
      details: ["10+ Completed"],
    },
  ],
};

const AboutCard = ({ card }) => {
  const Icon = card.icon;
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferror"
      className="about__card"
    >
      <Icon classname="about__icon" />
      <h5>{card.title}</h5>
      {card.details.map((detail, index) => (
        <small key={index} className="card__detail">
          {detail}
        </small>
      ))}
    </a>
  );
};

const About = () => {
  return (
    <section id="about">
      <h5>Get to know Caleb</h5>
      <h2>About Me</h2>

      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} loading="lazy" alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutData.cards.map((card) => (
              <AboutCard key={card.id} card={card} />
            ))}
          </div>

          <div id="about_me_paragraphs">
            {aboutData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about__button">
              <a href="#Contact" className="btn btn-primary">
                <p>Let's Talk!</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
