import IMG1 from "../../assets/portfolio1.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Craigslist Clone",
    github: "https://github.com/impr3ssionist/StrangersThings",
    demoAvailable: true,
    demo: "https://cocky-lewin-4971a7.netlify.app/",
    demoLabel: "Live Demo",
  },
  {
    id: 2,
    image: IMG6,
    title: "Beyond the Coverage",
    projectType: "Full-stack client website",
    summary:
      "A full-stack insurance consulting website with a lead capture workflow, Supabase-backed admin portal, email notifications, and GitHub Actions deployment pipelines.",
    demoAvailable: true,
    demo: "https://www.beyondthecoverage.com",
    demoLabel: "Live Site",
    caseStudy: {
      id: "beyond-the-coverage",
      status: "Live production site",
      role:
        "Full-stack developer responsible for frontend implementation, backend API routes, database/auth integration, admin tooling, deployment workflow, and client delivery.",
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Supabase Auth",
        "Resend API",
        "Zod",
        "Jest",
        "React Testing Library",
        "GitHub Actions",
        "Vercel",
      ],
      snapshot: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Type", value: "Client project" },
        {
          label: "Stack",
          value:
            "Next.js, React, TypeScript, Tailwind CSS, Supabase, Resend, GitHub Actions, Vercel",
        },
        { label: "Status", value: "Live production site" },
      ],
      sections: [
        {
          title: "Overview",
          body: "Beyond the Coverage is a live client website for an insurance consulting business. The project combines a polished public marketing site with backend functionality for contact submissions, email notifications, and an authenticated admin portal where the client can review and manage inbound leads.",
        },
        {
          title: "Problem",
          body: "The client needed more than a static website. Beyond the Coverage needed a professional web presence that could collect qualified inquiries, notify the business when new leads arrived, and give authorized staff a private place to review and manage submissions.",
        },
        {
          title: "Solution",
          body: "I delivered a responsive public website, a validated lead capture workflow, and a private admin experience for reviewing submissions, tracking status, adding internal notes, and exporting CSV data.",
        },
        {
          title: "Technical Implementation",
          body: "The public website is built with Next.js, React, TypeScript, and Tailwind CSS. Backend functionality is handled through Next.js route handlers. Supabase provides database storage and authentication. Zod validates contact submissions before persistence. Resend powers admin email notifications.",
          bullets: [
            "Built a responsive marketing website.",
            "Implemented a validated contact form using Zod.",
            "Stored submissions in Supabase.",
            "Added rate limiting for form submissions.",
            "Integrated Resend for admin email notifications.",
            "Configured environment-based setup for local, staging, and production environments.",
          ],
        },
        {
          title: "Admin Workflow",
          body: "The admin portal uses Supabase Auth for login and JWT-based API authorization for protected admin actions. Authorized staff can view submissions, update statuses, add notes, and export CSV data without exposing private operational details on the public site.",
        },
        {
          title: "CI/CD and Deployment",
          body: "The project includes GitHub Actions workflows for CI, staging, and production deployment. The production workflow includes lint/build checks, security audit steps, manual production approval, Vercel CLI deployment, and health checks.",
        },
        {
          title: "Outcome",
          body: "The client received a professional live website and a practical lead management workflow. Inquiries can be collected through the public site, saved to the database, emailed to the business, and managed through an authenticated dashboard.",
        },
        {
          title: "What It Demonstrates",
          body: "This project demonstrates that I can own a client web application beyond the frontend: API design, database integration, authentication, third-party services, deployment automation, documentation, production troubleshooting, and client communication.",
        },
      ],
      highlights: [
        "Full-stack client website",
        "Secure admin workflow",
        "Contact form automation",
        "Supabase database and auth integration",
        "Resend email notifications",
        "GitHub Actions CI/CD",
        "Vercel production deployment",
        "Client-facing documentation and delivery",
      ],
    },
  },
];

export default portfolioData;
