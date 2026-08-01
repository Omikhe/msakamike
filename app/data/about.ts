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
      year: "October 2022 - November 2022",
      role: "Junior Designer",
      company: "ImageXtra Marketing",
      description:
        "Designed and printed brand collateral for various clients. Produced high-quality storefront designs.",
    },
    {
      year: "May 2026 - August 2026",
      role: "Lead Designer",
      company: "Sana Cash 'N' Carry",
      description:
        "Managed in-store branding initiatives. Executed social media marketing campaigns in collaboration with the marketing officer. Developed marketing materials and design assets. Created motion graphics for digital platforms. Ensured brand consistency across all touchpoints",
    },

  ],
  resumeUrl: "/mike-msaka-resume.pdf",
};
