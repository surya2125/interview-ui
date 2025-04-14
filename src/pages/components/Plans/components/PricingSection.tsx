import React from "react";
import Slider from "react-slick";
import PricingCard from "./PricingCard";
import { pricings } from '@Constants';

const PricingSection: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false, // <-- disable by default
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // explicitly disable centerMode
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true, // enable on desktop
        },
      },
    ],
  };




  return (
    <div id='pricing' className="py-10 px-4 md:px-0">
      {/* Slick carousel for small screens */}
      <div className="block md:hidden">
        <Slider   {...sliderSettings}>
          {pricings.map((card, idx) => (
            <div key={idx} className="w-screen px-0">
              <PricingCard {...card} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Grid for medium and up */}
      <div className="hidden md:flex overflow-scroll  gap-[32px] max-w-6xl mx-auto p-10 no-scrollbar">
        {pricings.map((card, idx) => (
          <PricingCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
