import { IFeatureItemProps } from '@Interfaces';
import React from 'react';



const FeatureItem: React.FC<IFeatureItemProps> = ({ id, Icon, title, description, commonFlexClasses }) => {
  return (
    <div className={commonFlexClasses} id={`${id}-section`}>
      <div
        className="bg-white min-h-[60px] min-w-[60px] drop-shadow-lg p-3 flex items-center justify-center"
        id={`${id}-icon-container`}
      >
        <Icon className="h-[30px] w-[30px] text-[#54BD95]" />
      </div>
      <div id={`${id}-text-container`}>
        <h3
          className="text-[28px] max-md:text-[24px] font-bold text-[#191A15] mb-1 max-[425px]:text-center"
          id={`${id}-heading`}
        >
          {title}
        </h3>
        <p
          className="text-[#A6A6A6] text-[16px] max-sm:text-[14px] font-medium max-[425px]:text-center"
          id={`${id}-description`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
