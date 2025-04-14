import { Footer } from '@Components'
import BenefitSection from './components/BenefitSection/BenefitSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import HeroSection from './components/HeroSection/HeroSection'
import PlanSection from './components/Plans/PlanSection'
import TestimonialSection from './components/TestimonialSection/TestimonialSection'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <FeatureSection />
      <BenefitSection />
      <PlanSection />
      <Footer />
    </>
  )
}

export default LandingPage