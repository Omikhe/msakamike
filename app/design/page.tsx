"use client"
const categories =[
    "All Projects", "Branding", "Logos", "Flyers" 
]
export default function Design(){
    return(
        <div className="mt-12 flex flex-col gap-8">
            <div className="flex gap-2">
                {categories.map((category)=>(
                    <div 
                    key={category}
                    className="text-[#8A8A8A] bg-[#292929] px-2 py-1 rounded-full hover:bg-[#F2F2F2] hover:text-[#101010]"> 
                    {category} 
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4">
                <div className="size-[400px] rounded-3xl bg-[#272727]"></div>
                <div className="size-[400px] rounded-3xl bg-[#272727]"></div>
            </div>
        </div>
    )
}