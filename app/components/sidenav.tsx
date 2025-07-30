import { socialLinks, navLinks } from '@/app/components/linkz'
import Link from 'next/link';

export default function sidenav() {
  return (
    <div className="mx-40 mt-24 border">
      <div className=" flex flex-col gap-4 w-[82px]">

      <div className="size-20 bg-[#272727] rounded-full"></div>

      <div className="">
        <div className="p-2 bg-[#161616] border-[#202020] border-2 w-auto rounded-full">
          <div className="flex flex-col w-auto gap-5  bg-gradient-to-b from-[#282828] to-[#1B1B1B] rounded-full">
            {navLinks.map((link) => (
                          <div className=" p-4 h-auto w-auto flex justify-center items-center hover:bg-gradient-to-b from-[#545454] to-[#2F2F2F] rounded-full">
                            <Link
                                key={link.href}
                                href={link.href}
                                className=" rounded-full h-auto w-auto"
                            >
                              
                                    {link.icon}
                              
                                
                            </Link>
                            </div>
                        ))}
            
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
