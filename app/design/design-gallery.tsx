"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useCallback, useMemo, useState, useEffect } from "react";
import { designProjects, DESIGN_CATEGORIES, DesignCategory } from "@/app/data/design-projects";
import MasonryGrid from "@/app/components/masonry-grid";
import { LightboxItem } from "@/app/components/lightbox";

export default function DesignGallery() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract initial tag from search params or URL
  const getCategoryFromParams = useCallback((): DesignCategory => {
    const currentTagParam = searchParams.get("tag") || "All";
    const matched = DESIGN_CATEGORIES.find(
      (cat) => cat.toLowerCase() === currentTagParam.toLowerCase()
    );
    return matched || "All";
  }, [searchParams]);

  const [activeCategory, setActiveCategory] = useState<DesignCategory>(getCategoryFromParams);

  // Sync state if searchParams change externally (e.g. initial load or link navigation)
  useEffect(() => {
    setActiveCategory(getCategoryFromParams());
  }, [getCategoryFromParams]);

  // Handle browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tagParam = params.get("tag");
      if (!tagParam) {
        setActiveCategory("All");
        return;
      }
      const matched = DESIGN_CATEGORIES.find(
        (cat) => cat.toLowerCase() === tagParam.toLowerCase()
      );
      setActiveCategory(matched || "All");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Shallow route update for category selection
  const handleCategorySelect = useCallback(
    (category: DesignCategory) => {
      // 1. Instant client state update
      setActiveCategory(category);

      // 2. Update URL search params via pushState without triggering a server RSC re-fetch
      const params = new URLSearchParams(window.location.search);
      if (category === "All") {
        params.delete("tag");
      } else {
        params.set("tag", category.toLowerCase());
      }
      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      if (window.location.search !== (queryString ? `?${queryString}` : "")) {
        window.history.pushState(null, "", newUrl);
      }
    },
    [pathname]
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
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${isActive
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

