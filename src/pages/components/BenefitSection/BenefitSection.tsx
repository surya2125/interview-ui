import { BsChat } from "react-icons/bs";
import { CiCircleCheck, CiImageOn } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { checkIcon, laptopImg, profileImg } from "@assets";
import AppLayout from "@Layout";
import { benefits } from "@Constants";

const BenefitSection = () => {
  return (
    <div
      id="benefits"
      className="bg-gradient-to-tl from-[#daf2e9] via-[#f5faf7] to-[#ffffff]"
    >
      <AppLayout className="py-[60px] flex justify-between flex-col lg:flex-row gap-[40px]">
        <div className="flex-1 space-y-[50px]">
          <p className="font-bold text-[50px] text-[#191A15] max-md:text-center  overflow-hidden max-md:text-balance">
            What Benifit Will You Get
          </p>
          <div className='flex max-md:flex-col max-md:items-center'>
            <ul className="space-y-[30px]">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-[20px]">
                  {/* Custom check image */}
                  <div className="flex-shrink-0">
                    <img src={checkIcon} className="h-[32px] w-[32px]" />
                  </div>
                  {/* Text content */}
                  <span className="text-[18px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 relative w-full hidden sm:block">
          <div className="relative rounded-[20px] bg-transparent p-6 max-w-[529px] ml-auto">
            <img src={laptopImg} alt="Hero" className="rounded-[20px] w-full h-[529px]" />
            <div className="absolute flex items-center justify-center w-[40px] h-[40px] top-1/3  -left-15 -rotate-[40deg]  text-white  rounded-[10px] bg-[#74C9A9]">
              <CiImageOn size="30px" className="rotate-[40deg]" />
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-[30px] left-1/3 w-[262px] min-w-fit h-[78px] -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
            <div>
              {" "}
              <img
                src={profileImg}
                alt=""
                className=" rounded-[50%]"
                height={58}
                width={58}
              />
            </div>
            <div>
              <p className="text-[16px] text-[#191A15] font-medium">
                Amanda Young
              </p>
              <span className="text-[#A6A6A6] text-[12px] font-medium">
                Expert Saving Money
              </span>
            </div>
            <div className="h-[40px] w-[40px] text-white rounded-full bg-[#54BD95] flex items-center justify-center">
              <BsChat size={20} />
            </div>
          </div>
          <div className="absolute top-1/3 -right-20 w-[138px] h-[70px] -translate-x-1/2 bg-white rounded-xl shadow-md p-3 flex flex-col justify-center">
            <div className="text-xs text-gray-400">Total Income</div>
            <div className="flex justify-between">
              <div className="text-[16px] font-medium">$245.00</div>
              <FiBarChart2 color="#54BD95" size="20px" />
            </div>
          </div>
          <div className="absolute bottom-4 left-1/3 w-[138px] min-w-fit  -translate-x-1/2 bg-white rounded-xl shadow-md p-3 text-center">
            <div className="text-[16px] font-normal text-[#191A15] flex items-center gap-[15px]">
              <CiCircleCheck size={24} color="#54BD95" />
              Money Transfer Succesfull
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default BenefitSection;
