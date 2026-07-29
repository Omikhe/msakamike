import type { Metadata } from "next";
import { shotsData } from "@/app/data/shots";
import MasonryGrid from "@/app/components/masonry-grid";
import { LightboxItem } from "@/app/components/lightbox";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Shots & Experiments — Mike Msaka",
  description:
    "A gallery of quick visual experiments, photography shots, graphic snippets, and UI concepts by Mike Msaka.",
  openGraph: {
    title: "Shots & Experiments — Mike Msaka",
    description:
      "A gallery of quick visual experiments, photography shots, graphic snippets, and UI concepts by Mike Msaka.",
    url: "https://omikhe.vercel.app/shots",
  },
};

export default function ShotsPage() {
  const items: LightboxItem[] = shotsData.map((shot) => ({
    id: shot.id,
    publicId: shot.publicId,
    title: shot.title,
    category: shot.category,
    description: shot.description,
    alt: shot.alt,
    width: shot.width,
    height: shot.height,
  }));

  return (
    <div className="flex flex-col gap-8 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-8 lg:mt-12 pb-24 lg:pb-16">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-[#222222] pb-6">
        <div className="flex items-center gap-2">
          <Camera className="w-7 h-7 text-amber-400" />
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight">
            Visual Shots & Snippets
          </h1>
        </div>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
          Quick design experiments, photo studies, typography exploration, and interface concepts. Click to inspect full screen.
        </p>
      </div>

      {/* Shots Masonry Grid */}
      <MasonryGrid items={items} />
    </div>
  );
}