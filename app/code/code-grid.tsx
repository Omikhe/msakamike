"use client";

import { codeProjects } from "@/app/data/code-projects";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { CldImage } from "next-cloudinary";

export default function CodeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {codeProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col justify-between bg-[#181818] border border-[#262626] rounded-3xl overflow-hidden hover:border-[#383838] transition-all duration-300 shadow-md hover:shadow-xl group"
        >
          {/* Project Image Header */}
          <div className="relative w-full h-48 sm:h-56 bg-[#202020] overflow-hidden border-b border-[#222222]">
            <CldImage
              src={project.image}
              width={800}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {project.featured && (
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-pink-600 text-white rounded-full shadow-md">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 p-6 flex-1">
            <div>
              <h2 className="text-xl font-bold text-neutral-100 group-hover:text-pink-600 transition-colors">
                {project.title}
              </h2>
              <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-[#262626] text-neutral-300 rounded-md border border-[#333333]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 px-6 pb-6 pt-2 border-t border-[#222222]/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 hover:text-pink-500 transition-colors focus:outline-none focus:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors focus:outline-none focus:underline"
            >
              <Github className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
