import { BsCheck2All } from "react-icons/bs";

const experienceData = {
  domains: [
    {
      domainID: "Frontend Development",
      domainItems: [
        { icon: BsCheck2All, technology: "HTML", proficiency: "Experienced" },
        { icon: BsCheck2All, technology: "CSS", proficiency: "Experienced" },
        {
          icon: BsCheck2All,
          technology: "JavaScript",
          proficiency: "Intermediate",
        },
        { icon: BsCheck2All, technology: "React", proficiency: "Intermediate" },
        {
          icon: BsCheck2All,
          technology: "TypeScript",
          proficiency: "Familiar",
        },
        { icon: BsCheck2All, technology: "Svelte", proficiency: "Familiar" },
      ],
    },
    {
      domainID: "Backend Development",
      domainItems: [
        {
          icon: BsCheck2All,
          technology: "Node.js",
          proficiency: "Experienced",
        },
        { icon: BsCheck2All, technology: "Python", proficiency: "Experienced" },
        {
          icon: BsCheck2All,
          technology: "postgreSQL",
          proficiency: "Familiar",
        },
      ],
    },
    {
      domainID: "DevOps",
      domainItems: [
        {
          icon: BsCheck2All,
          technology: "YAML/TOML",
          proficiency: "Intermediate",
        },
        {
          icon: BsCheck2All,
          technology: "GitLab CI/CD",
          proficiency: "Intermediate",
        },
        { icon: BsCheck2All, technology: "Docker", proficiency: "Familiar" },
        {
          icon: BsCheck2All,
          technology: "Kubernetes",
          proficiency: "Familiar",
        },
      ],
    },
  ],
};

export default experienceData;
