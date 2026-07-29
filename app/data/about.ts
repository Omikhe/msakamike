export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface AboutData {
  name: string;
  tagline: string;
  bio: string[];
  designSkills: string[];
  codeSkills: string[];
  tools: string[];
  timeline: TimelineItem[];
  resumeUrl: string; // TODO: Place real CV/Resume PDF in /public/resume.pdf
}

export const aboutData: AboutData = {
  name: "Mike Msaka",
  tagline: "Graphic Designer & Front-End Web Developer",
  bio: [
    "I am a passionate Graphic Designer who also writes clean, modern code. Based in Blantyre, Malawi, I specialize in crafting bold visual identities, high-impact promotional graphics, and fast, dynamic web experiences.",
    "Over the past 5+ years, I have helped brands, real estate firms, media outlets, and tech hubs articulate their vision through polished branding, publication design, and modern web applications.",
    "When I'm not tweaking vector paths in Illustrator or building React components in VS Code, you can find me experimenting with photography, listening to podcasts, or exploring modern UI design systems.",
  ],
  designSkills: [
    "Brand Identity & Strategy",
    "Logo & Monogram Design",
    "Publication & Poster Layout",
    "Marketing & Promotional Assets",
    "UI/UX & Wireframing",
    "Vector Artwork & Typography",
  ],
  codeSkills: [
    "TypeScript & JavaScript (ES6+)",
    "React & Next.js (App Router)",
    "Tailwind CSS v4 & Modern CSS",
    "HTML5 / Semantic Web",
    "REST & Cloudinary API Integration",
    "Git & Version Control",
  ],
  tools: [
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Figma",
    "VS Code",
    "Vercel",
  ],
  timeline: [
    {
      year: "2024 — Present",
      role: "Lead Graphic Designer & Front-End Developer",
      company: "Freelance / Independent Studio",
      description:
        "Designing brand identities and developing responsive web applications for client projects across Africa.",
    },
    {
      year: "2022 — 2024",
      role: "Senior Graphic Designer",
      company: "CPC Real Estate & Creative Agency",
      description:
        "Designed marketing campaigns, property listing catalogs, and digital social assets for high-profile real estate ventures.",
    },
    {
      year: "2020 — 2022",
      role: "Visual Communications Specialist",
      company: "Ziyembe Media Group",
      description:
        "Managed brand visual identity, event collateral, and digital promotional graphics for community radio and public campaigns.",
    },
  ],
  resumeUrl: "/resume.pdf", // TODO: Upload your CV PDF file to the public/ folder as resume.pdf
};
