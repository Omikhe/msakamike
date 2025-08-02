"use client"
import { navLinks } from "./linkz";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Bottomnav() {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Update active index when pathname changes
    useEffect(() => {
        const newIndex = navLinks.findIndex(link => link.href === pathname);
        if (newIndex !== -1 && newIndex !== activeIndex) {
            setIsTransitioning(true);
            setActiveIndex(newIndex);

            // Reset transition state after animation completes
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [pathname, activeIndex]);

    return (
        <div className="m-4">
            {/* Navigation Links */}
            <div className="p-1 bg-[#161616] border-[#202020] border-2 rounded-full relative overflow-hidden">
                {/* Animated background indicator */}
                <div
                    className="absolute top-1 bottom-1 bg-gradient-to-b from-[#545454] to-[#2F2F2F] rounded-full shadow-md transition-all duration-300 ease-in-out z-0"
                    style={{
                        left: `${4 + (activeIndex * (100 / navLinks.length))}%`,
                        width: `${(100 / navLinks.length) - 8}%`,
                        transform: `translateX(-50%)`,
                        opacity: isTransitioning ? 0.8 : 1
                    }}
                />

                <div className="flex gap-1 bg-gradient-to-b from-[#282828] to-[#1B1B1B] rounded-full relative z-10">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <div key={link.href} className="flex-1">
                                <Link
                                    href={link.href}
                                    className={`m-1 p-2.5 gap-2 flex justify-center items-center rounded-full transition-all duration-300 ease-in-out relative ${isActive
                                        ? "text-[#F2F2F2] bg-gradient-to-b from-[#545454] to-[#2F2F2F] shadow-md transform scale-105"
                                        : "text-[#565656] hover:text-[#F2F2F2] hover:transform hover:scale-102"
                                        }`}
                                    style={{
                                        transitionProperty: 'all',
                                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    {/* Icon with smooth scaling */}
                                    <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'
                                        }`}>
                                        {link.icon}
                                    </div>

                                    {/* Label with smooth slide and fade animation */}
                                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive
                                        ? "max-w-[200px] opacity-100 transform translate-x-0"
                                        : "max-w-0 opacity-0 transform translate-x-4"
                                        }`}>
                                        <span className="whitespace-nowrap font-medium">
                                            {link.label}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Subtle glow effect for active item */}
                <div
                    className="absolute top-0 bottom-0 pointer-events-none transition-all duration-300 ease-in-out"
                    style={{
                        left: `${4 + (activeIndex * (100 / navLinks.length))}%`,
                        width: `${(100 / navLinks.length) - 8}%`,
                        transform: `translateX(-50%)`,
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        opacity: isTransitioning ? 0.6 : 0.3
                    }}
                />
            </div>
        </div>
    )
}