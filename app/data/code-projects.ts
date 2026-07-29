export interface CodeProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string; // Cloudinary publicId or local image path
  liveUrl: string; // TODO: Replace with real live URL when deployed
  sourceUrl: string; // TODO: Replace with real GitHub repository URL
  featured?: boolean;
}

export const codeProjects: CodeProject[] = [
  {
    id: "omikhe-portfolio",
    title: "Mike Msaka Portfolio Site",
    description:
      "A fast, responsive portfolio website built with Next.js 15 App Router, React 19, Cloudinary API integration, and Tailwind CSS v4 featuring a custom masonry grid and lightboxes.",
    techStack: ["Next.js 15", "React 19", "Tailwind CSS v4", "Cloudinary", "TypeScript"],
    image: "codeschool_fldxyr",
    liveUrl: "https://omikhe.vercel.app", // TODO: Update live URL if needed
    sourceUrl: "https://github.com/omikhe/msakamike", // TODO: Update source repository URL
    featured: true,
  },
  {
    id: "property-valuation-portal",
    title: "Valuations Africa Client Portal",
    description:
      "A full-stack property valuation calculator and client intake web application with real-time PDF generation, interactive mapping, and dynamic quote estimations.",
    techStack: ["React", "Node.js", "Express", "Tailwind CSS", "PostgreSQL"],
    image: "valuations-africa_usdwwz",
    liveUrl: "#", // TODO: Replace with live client URL
    sourceUrl: "#", // TODO: Replace with GitHub source link
    featured: true,
  },
  {
    id: "codeschool-lms",
    title: "CodeSchool Learning Management Platform",
    description:
      "An interactive student portal for coding bootcamp students featuring video lesson playback, quiz submissions, progress tracking dashboards, and automated grading.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Stripe"],
    image: "codeschool-3-1_z0v9cp",
    liveUrl: "#", // TODO: Replace with live LMS platform URL
    sourceUrl: "#", // TODO: Replace with GitHub source link
    featured: false,
  },
  {
    id: "realestate-listing-engine",
    title: "CPC Real Estate Listing Engine",
    description:
      "High-performance property inventory listing site with instant search filtering, interactive image carousels, schedule tour forms, and agent dashboard management.",
    techStack: ["Next.js", "GraphQL", "Tailwind CSS", "Cloudinary"],
    image: "CPC-realtor-flyer-2-2_eym0nd",
    liveUrl: "#", // TODO: Replace with live listing engine URL
    sourceUrl: "#", // TODO: Replace with GitHub source link
    featured: false,
  },
];
