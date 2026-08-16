import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import CodeGrid from "./code-grid";

export const metadata: Metadata = {
  title: "Code Projects — Mike Msaka",
  description:
    "Explore front-end web development projects, modern Next.js/React applications, and interactive web tools built by Mike Msaka.",
  openGraph: {
    title: "Code Projects — Mike Msaka",
    description:
      "Explore front-end web development projects, modern Next.js/React applications, and interactive web tools built by Mike Msaka.",
    url: "https://omikhe.vercel.app/code",
  },
};

export default function CodePage() {
  return (
    <div className="flex flex-col gap-8 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-8 lg:mt-12 pb-24 lg:pb-16">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-[#222222] pb-6">
        <div className="flex items-center gap-2">
          <Code2 className="w-7 h-7 text-pink-600" />
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight">
            Code & Web Projects
          </h1>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
          Web applications, interactive components, and front-end projects built with modern frameworks and clean, responsive code.
        </p>
      </div>

      {/* Code Projects Grid */}
      <CodeGrid />
    </div>
  );
}