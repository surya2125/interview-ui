import { IFooterSectionProps } from '@Interfaces';
import React from 'react';



const FooterSection: React.FC<IFooterSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h2 className="text-[#FFFFFF] text-[18px] text-base font-bold text-nowrap sm:text-lg">
        {title}
      </h2>
      {items.map((item) => (
        <li
          key={item.label}
          className="my-2 block cursor-pointer list-none text-[18px] font-normal text-[#A6A6A6] hover:text-white sm:text-base"
        >
          {item.label}
        </li>
      ))}
    </div>
  );
};

export default FooterSection;
