"use client"

import { socialLinks, navLinks } from "@/app/components/linkz";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <div className="mx-20 flex flex-col justify-center min-h-screen">
      <div className="flex flex-col gap-14 w-[82px] items-center justify-center">
        {/* Profile/Avatar */}
        <div className="size-16 bg-amber-100 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            width={55}
            height={55}
            src="/omikhe-avatar.png"
            alt="Mike Msaka - Graphic Designer"
            priority
            className="rounded-full"
          />
        </div>
        
         {/* Navigation Links */}
        <nav>
          <div className="p-1 bg-[#161616] border-[#202020] border-2 rounded-full">
            <div className="flex flex-col gap-2 bg-gradient-to-b from-[#282828] to-[#1B1B1B] rounded-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`m-1 p-2 flex justify-center items-center rounded-full transition-all duration-200 ${
                        isActive
                          ? "text-[#F2F2F2] bg-gradient-to-b from-[#545454] to-[#2F2F2F] shadow-md"
                          : "text-[#565656] hover:text-[#F2F2F2] hover:bg-gradient-to-b from-[#545454] to-[#2F2F2F] hover:shadow-md"
                      }`}
                    >
                      {link.icon}
                      
                    </Link>
                    
                    {/* Tooltip */}
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-gradient-to-b from-[#545454] to-[#2F2F2F] text-[#F2F2F2] px-3 py-2 rounded-full text-sm whitespace-nowrap shadow-lg">
                        {link.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col gap-2.5">
          {socialLinks.map(({ href, icon }) => (
            <Link
              key={href}
              href={href}
              className="text-[#565656] hover:text-[#F2F2F2] transition-colors"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}