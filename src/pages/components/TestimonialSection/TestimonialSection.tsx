

import AppLayout from '@Layout';
import FeatureItem from './components/FeatureItem';
import { features, ratings } from '@Constants';
import Ratings from './components/Rating';

const TestimonialSection = () => {
  const commonFlexClasses = "flex items-start max-[425px]:flex-col max-[425px]:justify-center max-md:items-center gap-[21px] max-md:bg-[#fbfbfb] max-md:shadow-md max-md:border-1 max-md:border-gray-300 max-md:px-[32px] max-md:py-[16px]";

  return (
    <div className='bg-[#F9F8FE]' id="testimonial-section">
      <AppLayout className='py-[60px]' >
        <div className="flex flex-col md:flex-row gap-[27px]" id="main-content-container">
          {/* Left Column */}
          <div className="md:w-[65%] flex flex-col max-md:items-center max-md:justify-center" id="left-column">
            <h1 className="text-[50px] max-md:text-[30px] max-sm:text-[21px] font-semibold text-[#191A15] mb-6 max-md:text-center" id="main-heading">
              How we support our partner all over the world
            </h1>

            <p className="text-[#A6A6A6] text-[16px] font-medium mb-8 max-md:text-center" id="description">
              SaaS become a common delivery model for many business application, including
              office software, messaging software, payroll processing software, DBMS software,
              management software
            </p>

            <div className="flex space-x-12">
              {ratings.map(({ id, rating, company }) => (
                <Ratings key={id} id={id} rating={rating} company={company} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 space-y-[30px]" id="right-column">
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                id={feature.id}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
                commonFlexClasses={commonFlexClasses}
              />
            ))}
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default TestimonialSection
