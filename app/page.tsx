"use client"

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen gap-10 mr-20 mt-10">

      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-[#313131] w-[720px]">Hi, I&apos;m <span className="text-[#7F7F7F]">Mike</span>. A designer that kind of codes!</h1>
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

      <div className="flex flex-col gap-4 ">
        <h1 className="font-semibold text-[#B5B5B5] ml-1">My Recent Projects</h1>
        <div className="flex gap-4 flex-wrap">
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>
          <div className="w-52 h-52 bg-[#272727] rounded-3xl"></div>


        </div>
      </div>
    </div>
  )
}