
import React, { useState } from "react";
import PricingSection from './components/PricingSection';
import AppLayout from '@Layout';

const BillingToggle: React.FC = () => {
  const [selected, setSelected] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="flex gap-[8px] bg-white rounded-xl shadow-sm   w-fit  p-[7px] h-[70px]">
      <button
        onClick={() => setSelected("monthly")}
        className={`px-[30px] py-[13px] cursor-pointer rounded-lg transition-colors min-w-fit duration-200 ${selected === "monthly"
          ? "bg-[#54BD95] text-white rounded-[10px] h-[56px]"
          : "text-black hover:bg-[#F9FAFB]"
          }`}
      >
        Bill Monthly
      </button>
      <button
        onClick={() => setSelected("yearly")}
        className={`px-[30px] py-[13px] rounded-lg cursor-pointer transition-colors min-w-fit duration-200 ${selected === "yearly"
          ? "bg-[#54BD95] text-white h-[56px]"
          : "text-black hover:bg-[#F9FAFB]"
          }`}
      >
        Bill Yearly
      </button>
    </div>
  );
};



const PlanSection = () => {
  return (
    <div className='bg-gradient-to-bl from-[#daf2e9] via-[#f5faf7] to-[#ffffff] '><AppLayout className='py-[60px] space-y-[67px]'>
      <div className='space-y-[40px]  flex flex-col items-center justify-center'>
        <p className='text-[50px] font-bold text-center'>Choose Plan
          That’s Right For You</p>
        <p className='text-[#A6A6A6] text-[16px] font-bold text-center'>Choose plan that works best for you, feel free to contact us</p>
        <BillingToggle />
      </div>
      <PricingSection />
    </AppLayout></div>
  )
}

export default PlanSection