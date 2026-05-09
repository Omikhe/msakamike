"use client";

import { CldImage } from "next-cloudinary";

interface ImageGridProps {
  publicIds: string[];
}

export default function ImageGrid({ publicIds }: ImageGridProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {publicIds.map((id) => (
        <CldImage
          key={id}
          width="960"
          height="960"
          src={id}
          sizes="100vw"
          alt={id}
          className="lg:w-52 lg:h-52 w-99.5 h-99.5 bg-[#272727] rounded-3xl overflow-hidden"
        />
      ))}
    </div>
  );
}
