"use client"

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-4 mr-20">

      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-[#313131]">Hi, I&apos;m Mike. A designer that kind of codes!</h1>
        <div className="flex gap-2">
          <div
            className="text-[#8A8A8A] bg-[#292929] px-4 py-2 rounded-full hover:bg-[#F2F2F2] hover:text-[#101010]">
            WhatsApp
          </div>
          <div
            className="text-[#8A8A8A] bg-[#292929] px-4 py-2 rounded-full hover:bg-[#F2F2F2] hover:text-[#101010]">
            Email
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        My Recent Projects
        <div className="flex gap-4 ">
          <div className="w-52 h-52 bg-amber-50 rounded-3xl"></div>
          <div className="w-52 h-52 bg-amber-50 rounded-3xl"></div>
          <div className="w-52 h-52 bg-amber-50 rounded-3xl"></div>
          <div className="w-52 h-52 bg-amber-50 rounded-3xl"></div>
          
        </div>
      </div>
    </div>
  )
}