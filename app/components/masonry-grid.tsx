"use client";

import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Lightbox, { LightboxItem } from "./lightbox";
import { ZoomIn } from "lucide-react";

interface MasonryGridProps {
  items: LightboxItem[];
  columns?: string; // Tailwind column class override, defaults to 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
}

export default function MasonryGrid({
  items,
  columns = "columns-1 sm:columns-2 md:columns-3 lg:columns-4",
}: MasonryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-neutral-500 bg-[#161616] rounded-3xl border border-[#222222]">
        <p className="text-base font-medium">No projects found matching the criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className={`${columns} gap-4 space-y-4 w-full`}>
        {items.map((item, index) => {
          // Calculate inline padding/aspect ratio to avoid Cumulative Layout Shift (CLS) if dimensions exist
          const width = item.width || 800;
          const height = item.height || 800;
          const aspectRatio = `${width} / ${height}`;

          return (
            <div
              key={item.id || item.publicId || index}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-[#1D1D1D] border border-[#262626] shadow-md hover:shadow-xl hover:border-[#383838] transition-all duration-300 transform hover:-translate-y-1"
            >
              <button
                onClick={() => setLightboxIndex(index)}
                type="button"
                aria-label={`Open lightbox view for ${item.title}`}
                className="w-full h-full block text-left focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-[#121212] rounded-2xl overflow-hidden"
              >
                <div
                  className="relative w-full overflow-hidden bg-[#242424]"
                  style={{ aspectRatio }}
                >
                  <CldImage
                    src={item.publicId}
                    width={width}
                    height={height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    alt={item.alt || item.title}
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        {item.category && (
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-pink-700 block mb-0.5">
                            {item.category}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-neutral-100 line-clamp-1">
                          {item.title}
                        </h3>
                      </div>
                      <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal Integration */}
      <Lightbox
        items={items}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </>
  );
}
