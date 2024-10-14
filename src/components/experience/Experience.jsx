import "./Experience.css";
import { BsCheck2All } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />{" "}
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>TypeScript</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>Svelte</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
          </div>
        </div>

        {/* ************** End of Frontend ******************** */}

        <div className="experience__backend">
          <h3>Backend</h3>

          <div className="experience__content">
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>Node.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>postgreSQL</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>DevOps</h3>

          <div className="experience__content">
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>YAML/TOML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>GitLab CI/CD</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>Docker</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <BsCheck2All className="experience__details-icon" />
                <h4>Kubernetes</h4>
                <small className="text-light">Familiar</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
