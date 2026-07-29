import type { Metadata } from "next";
import { aboutData } from "@/app/data/about";
import { User, Download, Palette, Code2, Wrench, Briefcase } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Mike Msaka",
  description:
    "Learn more about Mike Msaka, a graphic designer and front-end web developer based in Blantyre, Malawi.",
  openGraph: {
    title: "About — Mike Msaka",
    description:
      "Learn more about Mike Msaka, a graphic designer and front-end web developer based in Blantyre, Malawi.",
    url: "https://omikhe.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-8 lg:mt-12 pb-24 lg:pb-16 max-w-5xl">
      {/* Bio Header Card */}
      <section className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 sm:p-8 bg-[#181818] border border-[#262626] rounded-3xl">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0 bg-amber-100">
          <Image
            src="/omikhe-avatar.png"
            alt="Mike Msaka - Graphic Designer and Front-End Developer"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight">
              {aboutData.name}
            </h1>
            <p className="text-amber-400 font-semibold text-base sm:text-lg mt-0.5">
              {aboutData.tagline}
            </p>
          </div>

          {/* Action: Resume Download Button */}
          <div className="pt-1">
            {/* TODO: Add your real PDF resume to /public/resume.pdf */}
            <a
              href={aboutData.resumeUrl}
              download="Mike_Msaka_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-amber-400 text-neutral-950 hover:bg-amber-300 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume / CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Semantic Bio Paragraphs Block */}
      <section aria-labelledby="bio-heading" className="flex flex-col gap-4">
        <h2 id="bio-heading" className="text-2xl font-bold text-neutral-100 border-b border-[#222222] pb-3 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-400" />
          <span>Biography</span>
        </h2>
        <div className="flex flex-col gap-4 text-neutral-300 leading-relaxed text-base sm:text-lg">
          {aboutData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Skills Grid Section */}
      <section aria-labelledby="skills-heading" className="flex flex-col gap-6">
        <h2 id="skills-heading" className="text-2xl font-bold text-neutral-100 border-b border-[#222222] pb-3 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-amber-400" />
          <span>Skills & Capabilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Design Skills */}
          <div className="p-6 bg-[#181818] border border-[#262626] rounded-3xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <Palette className="w-5 h-5" />
              <h3>Design</h3>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              {aboutData.designSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Development Skills */}
          <div className="p-6 bg-[#181818] border border-[#262626] rounded-3xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <Code2 className="w-5 h-5" />
              <h3>Development</h3>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              {aboutData.codeSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Tools */}
          <div className="p-6 bg-[#181818] border border-[#262626] rounded-3xl flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
              <Wrench className="w-5 h-5" />
              <h3>Tools & Stack</h3>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              {aboutData.tools.map((tool) => (
                <li key={tool} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section aria-labelledby="timeline-heading" className="flex flex-col gap-6">
        <h2 id="timeline-heading" className="text-2xl font-bold text-neutral-100 border-b border-[#222222] pb-3 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-amber-400" />
          <span>Experience & Highlights</span>
        </h2>

        <div className="flex flex-col gap-6">
          {aboutData.timeline.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#181818] border border-[#262626] rounded-3xl flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-[#333333] transition-colors"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-neutral-100">
                  {item.role}
                </h3>
                <span className="text-sm font-medium text-neutral-400">
                  {item.company}
                </span>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}