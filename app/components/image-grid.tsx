"use client";

import MasonryGrid from "./masonry-grid";
import { designProjects } from "@/app/data/design-projects";
import { LightboxItem } from "./lightbox";

interface ImageGridProps {
  publicIds?: string[];
}

export default function ImageGrid({ publicIds }: ImageGridProps) {
  // Map publicIds or use designProjects to construct rich LightboxItems
  const items: LightboxItem[] = designProjects.map((project) => ({
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

  // If publicIds supplied contain extra items not in designProjects, append them
  if (publicIds && publicIds.length > 0) {
    const existingPublicIds = new Set(items.map((i) => i.publicId));
    publicIds.forEach((id) => {
      if (!existingPublicIds.has(id)) {
        items.push({
          id,
          publicId: id,
          title: id.replace(/[-_]/g, " "),
          category: "Design",
          alt: `Design project ${id}`,
        });
      }
    });
  }

  return <MasonryGrid items={items} />;
}
