import type { Metadata } from "next";
import { Folder, Mail, MessageCircle } from "lucide-react";
import { Avatar } from "./components/sidenav";
import { fetchPublicIds } from "./actions";
import ImageGrid from "./components/image-grid";

export const metadata: Metadata = {
  title: "Mike Msaka — Graphic Designer & Web Developer",
  description:
    "Portfolio of Mike Msaka, a graphic designer and front-end developer based in Malawi specializing in brand identity, marketing collateral, and modern web applications.",
  openGraph: {
    title: "Mike Msaka — Graphic Designer & Web Developer",
    description:
      "Explore brand designs, flyers, logo marks, photography shots, and modern web projects by Mike Msaka.",
    url: "https://omikhe.vercel.app",
    siteName: "Mike Msaka Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Msaka — Graphic Designer & Web Developer",
    description:
      "Explore brand designs, flyers, logo marks, photography shots, and modern web projects by Mike Msaka.",
    creator: "@mikemsaka",
  },
};

export default async function Home() {
  const publicIds = await fetchPublicIds();

  return (
    <div className="flex flex-col justify-start min-h-screen gap-10 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 mt-8 lg:mt-12 pb-24 lg:pb-16">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 max-w-4xl">
        <div className="block lg:hidden">
          <Avatar />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-neutral-100 tracking-tight leading-tight">
          Hi, I&apos;m <span className="text-pink-600">Mike</span>. A designer
          that kind of codes!
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
          Crafting bold visual identities, high-impact marketing collateral, and fast responsive web experiences for forward-thinking brands and businesses.
        </p>

        {/* Contact Affordances - Clear Tappable Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/265985626249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-neutral-200 bg-[#242424] border border-[#333333] hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>WhatsApp</span>
          </a>

          <a
            href="mailto:mikemsaka84@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-neutral-200 bg-[#242424] border border-[#333333] hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Email Me</span>
          </a>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="flex flex-col gap-6 pt-4">
        <div className="flex items-center gap-2.5 border-b border-[#222222] pb-3">
          <Folder className="w-5 h-5 text-pink-600" />
          <h2 className="text-xl font-bold text-neutral-200 tracking-wide">
            Recent Projects
          </h2>
        </div>

        <ImageGrid publicIds={publicIds} />
      </div>
    </div>
  );
}
