import type { Metadata } from "next";
import { Suspense } from "react";
import DesignGallery from "./design-gallery";

export const metadata: Metadata = {
  title: "Design Portfolio — Mike Msaka",
  description:
    "Explore graphic design work by Mike Msaka including brand identity, posters, flyers, logo marks, and promotional social media graphics.",
  openGraph: {
    title: "Design Portfolio — Mike Msaka",
    description:
      "Explore graphic design work by Mike Msaka including brand identity, posters, flyers, logo marks, and promotional social media graphics.",
    url: "https://omikhe.vercel.app/design",
  },
};

export default function DesignPage() {
  return (
    <div className="flex flex-col gap-8 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-8 lg:mt-12 pb-24 lg:pb-16">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-[#222222] pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight">
          Design Showcase
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base max-w-2xl">
          A selection of brand identity projects, print posters, promotional flyers, and corporate logo marks. Click any image to view details.
        </p>
      </div>

      {/* Interactive Gallery with URL search params filter */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center p-12 text-neutral-500">
            Loading design portfolio...
          </div>
        }
      >
        <DesignGallery />
      </Suspense>
    </div>
  );
}