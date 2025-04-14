import React from "react";
import { IPricingCardProps } from '@Interfaces';
import { checkIcon } from '@assets';



const PricingCard: React.FC<IPricingCardProps> = ({
  title,
  description,
  price,
  features,
  ctaText,
  highlighted = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl p-6 shadow-md transition-transform duration-300 w-full   ${highlighted
        ? "bg-[#54BD95] text-white  md:scale-110"
        : "bg-white text-[#191A15]"
        }`}
    >
      <div className=''>
        <h2 className="text-[24px] md:text-[30px] font-semibold text-center">{title}</h2>
        <p
          className={`mt-1 text-center text-[16px] md:text-[18px] font-medium ${highlighted ? "text-white/80" : "text-gray-500"
            }`}
        >
          {description}
        </p>
        <div
          className={`text-center my-4 flex justify-center font-medium ${highlighted ? "text-white" : "text-[#A6A6A6]"
            }`}
        >
          $
          <span
            className={`text-3xl font-bold ${highlighted ? "text-white" : "text-[#191A15]"
              }`}
          >
            {price}
          </span>
        </div>
        <div className='flex flex-col items-center'>
          {highlighted && (
            <button className="bg-[#85DAB9] cursor-pointer  h-[40px] w-[130px] text-center text-xs py-1 rounded-md mb-4">
              Save $50 a year
            </button>
          )}
        </div>
        <div className={`${highlighted ? 'bg-white' : 'bg-[#F9FAFB]'} rounded-[10px] p-[26px]`}>


          <ul
            className={`space-y-[22px] text-sm  rounded-[10px] ${highlighted ? "bg-white text-black" : "text-gray-800 "
              }`}
          >
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-[10px]">
                <img src={checkIcon} alt="Check" className="w-[24px] h-[24px]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`mt-6 w-full py-[17px] px-[65px] rounded-lg text-sm font-medium shadow-lg transition ${highlighted
              ? "bg-[#54BD95] text-white hover:bg-white/90"
              : "bg-white text-[#54BD95] hover:bg-gray-100"
              }`}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
