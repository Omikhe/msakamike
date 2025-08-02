"use client"
import { ArrowUpRight } from "lucide-react"

const categories = [
    "All Projects", "Branding", "Logos", "Flyers"
]
export default function Design() {
    return (
        <div className="lg:mx-0 mx-4 mt-10 flex flex-col gap-8">
            <div className="flex gap-2">
                {categories.map((category) => (
                    <div
                        key={category}
                        className="text-[#8A8A8A] bg-[#292929] px-2 py-1 rounded-full hover:bg-[#F2F2F2] hover:text-[#101010]">
                        {category}
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 lg:gap-6 lg:mr-16 overflow-hidden">

                <div className="flex flex-col gap-1">
                    <div className="h-[358px] w-[358px] lg:h-[300px] lg:w-[300px] rounded-3xl bg-[#272727] font-mono"></div>
                    <div className="flex gap-2 hover:underline">
                        <h3 className="font-mono ml-1.5 ">Valuations Africa</h3>
                        <ArrowUpRight></ArrowUpRight>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="h-[358px] w-[358px] lg:h-[300px] lg:w-[300px] rounded-3xl bg-[#272727] font-mono"></div>
                    <div className="flex gap-2 hover:underline">
                        <h3 className="font-mono ml-1.5 ">Valuations Africa</h3>
                        <ArrowUpRight></ArrowUpRight>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="h-[358px] w-[358px] lg:h-[300px] lg:w-[300px] rounded-3xl bg-[#272727] font-mono"></div>
                    <div className="flex gap-2 hover:underline">
                        <h3 className="font-mono ml-1.5 ">Valuations Africa</h3>
                        <ArrowUpRight></ArrowUpRight>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="h-[358px] w-[358px] lg:h-[300px] lg:w-[300px] rounded-3xl bg-[#272727] font-mono"></div>
                    <div className="flex gap-2 hover:underline">
                        <h3 className="font-mono ml-1.5 ">Valuations Africa</h3>
                        <ArrowUpRight></ArrowUpRight>
                    </div>
                </div>




            </div>
        </div>
    )
}