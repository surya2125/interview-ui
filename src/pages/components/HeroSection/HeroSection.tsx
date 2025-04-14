import { FiBarChart2 } from 'react-icons/fi'
import { IoIosCheckmark } from 'react-icons/io'
import { BsChatLeft } from 'react-icons/bs'
import { GoDatabase } from 'react-icons/go'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'
import { creditCardImg, heroImg } from '@assets'
import AppLayout from '@Layout'
import { Header } from '@Components'
import CollabSection from './components/CollabSection'

// Curved Underline for title
const CurvedUnderLine = () => {
  return (
    <svg
      viewBox="0 0 500 40"
      className="mt-[30px] w-[70%] md:w-[90%]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 30 Q250 -20 500 30"
        stroke="#54BD95"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  )
}

// Right side content of Hero Section
const ImageSection = () => {
  return (
    <div className="relative hidden w-full flex-1 sm:block">
      <div className="relative ml-auto max-w-[410px] rounded-[20px] bg-[#54BD95] p-6">
        <img
          src={heroImg}
          alt="Hero"
          className="rounded-[20px]"
        />
        <div className="absolute top-1/3 -left-15 flex h-[40px] w-[40px] rotate-[-40deg] items-center justify-center rounded-[10px] bg-[#4535AF] text-white">
          <IoIosCheckmark size="30px" className="rotate-[40deg]" />
        </div>
      </div>

      {/* Floating Card: Amount */}
      <div className="absolute left-1/7 top-[30px] flex h-[78px] w-[262px] -translate-x-1/2 items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-lg">
        <div className="flex w-full items-center border-b border-gray-300 pb-1">
          <div className="w-full">
            <span className="text-[12px] text-[#A9A7B6]">Enter Amount</span>
            <input
              className="w-full border-0 text-sm outline-none"
              placeholder="Enter amount"
              value="$450.00"
              readOnly
            />
          </div>
          <button className="ml-2 rounded-[40px] bg-[#54BD95] px-[16px] py-[5px] text-sm text-white">
            Send
          </button>
        </div>
      </div>

      {/* Floating Card: Income */}
      <div className="absolute bottom-4 left-1/4 flex h-[70px] w-[138px] -translate-x-1/2 flex-col justify-center rounded-xl bg-white p-3 shadow-md">
        <div className="text-xs text-gray-400">Total Income</div>
        <div className="flex justify-between">
          <div className="text-[16px] font-medium">$245.00</div>
          <FiBarChart2 color="#54BD95" size="20px" />
        </div>
      </div>

      {/* Floating Image: Credit Card */}
      <img
        src={creditCardImg}
        alt="Credit Card"
        className="absolute bottom-16 -right-16 h-[188px] w-[146px] rotate-[15deg] rounded-[10px]"
      />

      {/* Floating Icons */}
      <div className="absolute top-6 -right-6 flex h-[40px] w-[40px] rotate-[15deg] items-center justify-center rounded-[10px] bg-[#FBC75E] text-white">
        <GoDatabase size="20px" />
      </div>

      <div className="absolute -bottom-2 right-10 flex h-[40px] w-[40px] rotate-[15deg] items-center justify-center rounded-[10px] bg-[#FFAA94] text-white">
        <BsChatLeft size="20px" />
      </div>
    </div>
  )
}

// Left side content of Hero Section
const LeftSection = () => {
  return (
    <div className="flex-1">
      <h1 className="font-bold leading-tight md:text-[40px] lg:text-[60px] xl:text-[80px]">
        We’re here to
        Increase your
        Productivity
      </h1>

      {/* Curved Underline SVG */}
      <CurvedUnderLine />

      {/* Description */}
      <p className="mt-[20px] max-w-md text-[18px] md:mt-[50px]">
        Let's make your work more organized and easy using the Taskio Dashboard with the latest features in managing your work every day.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col gap-[20px] sm:flex-row sm:gap-[40px]">
        <button
          id="try-free-trial"
          className="h-[62px] w-full rounded-[40px] bg-[#54BD95] px-6 text-white sm:w-[165px]"
        >
          Try free trial
        </button>

        <button
          id="view-demo"
          className="flex h-[62px] w-full items-center justify-center gap-[8px] rounded-[40px] border border-[#54BD95] text-[18px] font-medium transition-colors duration-300 ease-in hover:bg-[#54BD95] hover:text-white sm:w-[165px]"
        >
          <MdOutlinePlayCircleOutline size="30px" />
          View Demo
        </button>
      </div>
    </div>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-[#e6f7f2] via-[#f6f6f6] to-[#fefefe]"
    >
      <Header />

      <AppLayout className="flex flex-col items-center justify-center gap-[60px]">
        {/* Hero Section */}
        <section className="mt-14 flex flex-col  items-center justify-between gap-[35px] lg:flex-row">
          {/* Left Content */}
          <LeftSection />

          {/* Right Image & Floating Elements */}
          <ImageSection />
        </section>

        {/* Collab Logos Section */}
        <CollabSection />
      </AppLayout>
    </div>
  )
}

export default HeroSection
