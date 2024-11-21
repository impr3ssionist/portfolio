import "./Experience.css";
import experienceData from "./experienceData";
import { memo } from "react";

const TechCheckMark = memo(({ icon: Icon, technology, proficiency }) => {
  return (
    <div className="experience_details">
      <Icon className="experience__details-icon" />
      <h4>{technology}</h4>
      <small className="text-light">{proficiency}</small>
    </div>
  );
});

const DomainCard = memo(({ domain }) => {
  return (
    <div className="experience__frontend">
      <h3>{domain.domainID}</h3>
      <div className="experience__content">
        {domain.domainItems.map((item) => (
          <TechCheckMark key={item.technology} {...item} />
        ))}
      </div>
    </div>
  );
});

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        {experienceData.domains.map((domain) => (
          <DomainCard key={domain.domainID} domain={domain} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
