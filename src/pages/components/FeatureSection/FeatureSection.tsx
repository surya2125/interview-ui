import { useRef } from 'react'
import FeatureCard from './Components/FeatureCard'
import AppLayout from '@Layout'
import { otherFeatures } from '@Constants'
import { useAutoScroll } from '@Hooks'

/**
 * FeatureSection displays a horizontally scrollable section of key features,
 * along with a heading, description, and CTA button.
 */
const FeatureSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  /**
   * Automatically scrolls the feature cards for mobile viewports (<768px)
   */
  useAutoScroll(scrollRef, {
    scrollPercentage: 1.2,
    interval: 2000
  })

  // Tailwind utility class constants for reuse
  const sectionHeading = 'text-[50px] font-semibold text-[#191A15]'
  const sectionParagraph = 'text-[#A6A6A6] text-[16px] font-medium text-center'
  const buttonStyles = 'h-[66px] px-[31px] w-fit rounded-[70px] bg-[#54BD95] text-white cursor-pointer'

  return (
    <div
      id='features'
      className='bg-gradient-to-bl from-[#daf2e9] via-[#f5faf7] to-[#ffffff]'
    >
      <AppLayout className='py-[60px] space-y-[70px]'>
        {/* Heading + Description + CTA Button */}
        <div
          className='flex flex-col md:flex-row items-center justify-between gap-4 text-center'
        >
          {/* Section Heading */}
          <div className='flex-[1.3]'>
            <p className={sectionHeading}>Our Features you can get</p>
          </div>

          {/* Section Paragraph */}
          <div className='flex-[1]'>
            <p className={sectionParagraph}>
              We offer a variety of interesting features that can help increase
              your productivity at work and manage your project easily
            </p>
          </div>

          {/* CTA Button */}
          <div className='flex-[1] flex justify-end'>
            <button className={buttonStyles}>Get Started</button>
          </div>
        </div>

        {/* Scrollable Feature Cards */}
        <div
          id='feature-scroll-container'
          ref={scrollRef}
          className='flex gap-[40px] overflow-x-auto whitespace-nowrap pb-2 scroll-smooth no-scrollbar'
        >
          {otherFeatures.map((feature, idx) => (
            <FeatureCard description={feature.description} title={feature.title} key={`feature-card-${idx}`} img={feature.img} />
          ))}
        </div>
      </AppLayout>
    </div>
  )
}

export default FeatureSection
