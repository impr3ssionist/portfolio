import "./Portfolio.css";
import portfolioData from "./portfolioData";

const AdminWorkflowMockup = () => {
  return (
    <div className="portfolio__mockup" aria-label="Synthetic admin dashboard preview">
      <div className="portfolio__mockup-topbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="portfolio__mockup-header">
        <div>
          <small>Admin Portal</small>
          <h4>Lead Submissions</h4>
        </div>
        <button type="button">Export CSV</button>
      </div>
      <div className="portfolio__mockup-stats">
        <span>New</span>
        <span>In Review</span>
        <span>Closed</span>
      </div>
      <div className="portfolio__mockup-table">
        <div>
          <span>Inquiry</span>
          <span>Status</span>
          <span>Notes</span>
        </div>
        <div>
          <span>Insurance review</span>
          <span>New</span>
          <span>Follow up</span>
        </div>
        <div>
          <span>Coverage question</span>
          <span>In Review</span>
          <span>Assigned</span>
        </div>
        <div>
          <span>Consultation</span>
          <span>Closed</span>
          <span>Archived</span>
        </div>
      </div>
    </div>
  );
};

const CaseStudy = ({ project }) => {
  const { caseStudy } = project;

  if (!caseStudy) {
    return null;
  }

  return (
    <article id={caseStudy.id} className="portfolio__case-study">
      <div className="portfolio__case-hero">
        <div>
          <p className="portfolio__eyebrow">{project.projectType}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <p className="portfolio__role">
            <strong>My role:</strong> {caseStudy.role}
          </p>
          <div className="portfolio__case-actions">
            <a
              href={project.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </div>
        </div>
        <AdminWorkflowMockup />
      </div>

      <div className="portfolio__badges" aria-label="Technology stack">
        {caseStudy.stack.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      <div className="portfolio__snapshot">
        {caseStudy.snapshot.map((item) => (
          <div key={item.label}>
            <small>{item.label}</small>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="portfolio__case-grid">
        {caseStudy.sections.map((section) => (
          <section key={section.title} className="portfolio__case-section">
            <h4>{section.title}</h4>
            <p>{section.body}</p>
            {section.bullets ? (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <div className="portfolio__highlights">
        <h4>Highlights</h4>
        <div>
          {caseStudy.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({
  image,
  title,
  github,
  demoAvailable,
  demo,
  demoLabel,
  projectType,
  summary,
  caseStudy,
}) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={image} loading="lazy" alt={title} />
      </div>
      <h3>{title}</h3>
      {projectType ? <small>{projectType}</small> : null}
      {summary ? <p>{summary}</p> : null}
      <div className="portfolio__item-cta">
        {github ? (
          <a
            href={github}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        ) : null}
        {caseStudy ? (
          <a href={`#${caseStudy.id}`} className="btn">
            Case Study
          </a>
        ) : null}
        {demoAvailable ? (
          <a
            href={demo}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {demoLabel || "Live Demo"}
          </a>
        ) : null}
      </div>
    </article>
  );
};

const Portfolio = () => {
  const caseStudyProjects = portfolioData.filter((project) => project.caseStudy);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="container">
        {caseStudyProjects.map((project) => (
          <CaseStudy key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
