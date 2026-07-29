"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { designProjects, DESIGN_CATEGORIES, DesignCategory } from "@/app/data/design-projects";
import MasonryGrid from "@/app/components/masonry-grid";
import { LightboxItem } from "@/app/components/lightbox";

export default function DesignGallery() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract tag from search params (case-insensitive match)
  const currentTagParam = searchParams.get("tag") || "All";

  const activeCategory = useMemo<DesignCategory>(() => {
    const matched = DESIGN_CATEGORIES.find(
      (cat) => cat.toLowerCase() === currentTagParam.toLowerCase()
    );
    return matched || "All";
  }, [currentTagParam]);

  const handleCategorySelect = useCallback(
    (category: DesignCategory) => {
      const params = new URLSearchParams(searchParams.toString());
      if (category === "All") {
        params.delete("tag");
      } else {
        params.set("tag", category.toLowerCase());
      }
      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
      router.push(newUrl, { scroll: false });
    },
    [searchParams, pathname, router]
  );

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return designProjects;
    return designProjects.filter(
      (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const lightboxItems: LightboxItem[] = useMemo(() => {
    return filteredProjects.map((project) => ({
      id: project.id,
      publicId: project.publicId,
      title: project.title,
      category: project.category,
      client: project.client,
      description: project.description,
      alt: project.alt,
      width: project.width,
      height: project.height,
    }));
  }, [filteredProjects]);

  return (
    <div className="flex flex-col gap-6">
      {/* Responsive Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
        {DESIGN_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategorySelect(category)}
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                isActive
                  ? "bg-amber-400 text-neutral-950 font-semibold shadow-md"
                  : "bg-[#242424] text-neutral-300 hover:bg-[#333333] hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Filtered Masonry Grid */}
      <MasonryGrid items={lightboxItems} />
    </div>
  );
}
