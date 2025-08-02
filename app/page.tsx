"use client"
import { Folder } from "lucide-react"
import { Avatar } from "./components/sidenav"

export default function Home() {
  return (
    <div className="flex flex-col justify-start min-h-screen gap-10 mx-4 mt-10 lg:mr-20 lg:mt-10">

      <div className="flex flex-col gap-4">
        <div className="block lg:hidden">

          <Avatar />
        </div>

        <h1 className="text-3xl lg:text-6xl font-bold text-[#313131] text-wrap lg:w-[720px]">Hi, I&apos;m <span className="text-[#7F7F7F]">Mike</span>. A designer that kind of codes!</h1>
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

      <div className="flex flex-col gap-2">

        <div className="flex gap-2">
          <Folder />
          <h1 className="font-semibold  ml-1">My Recent Projects</h1>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>
          <div className="lg:w-52 lg:h-52 w-[398px] h-[398px] bg-[#272727] rounded-3xl"></div>


        </div>
      </div>
    </div>
  )
}