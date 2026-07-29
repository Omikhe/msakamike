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
    id: "worklify",
    title: "Worklify",
    description:
      "A fast, responsive portfolio website built with Next.js 15 App Router, React 19, Cloudinary API integration, and Tailwind CSS v4 featuring a custom masonry grid and lightboxes.",
    techStack: ["Next.js 15", "Tailwind CSS v4"],
    image: "worklify-platform_zcq5fz.png",
    liveUrl: "https://worklify.vercel.app",
    sourceUrl: "https://github.com/omikhe/worklify",
    featured: true,
  },
  {
    id: "chirunga-munchies",
    title: "Chirunga Munchies",
    description:
      "A fast, responsive portfolio website built with Next.js 15 App Router, React 19, Cloudinary API integration, and Tailwind CSS v4 featuring a custom masonry grid and lightboxes.",
    techStack: ["Next.js 15", "Tailwind CSS v4"],
    image: "chirunga-munchies-snapshots_jxponf.jpg",
    liveUrl: "https://chirunga-munchies.vercel.app",
    sourceUrl: "https://github.com/omikhe/chirunga-munchies",
    featured: true,
  }
  ,
];
