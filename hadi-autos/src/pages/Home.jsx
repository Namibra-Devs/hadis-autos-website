import FlipbookHero from '@components/home/FlipbookHero'

import FeaturedVehicles from '@components/home/FeaturedVehicles'
import HowItWorks from '@components/shared/HowItWorks'
import Testimonials from '@components/shared/Testimonials'
import CTASection from '@components/home/CTASection'
import BrowseSection from '../components/home/BrowseSection'

const Home = () => {
  return (
    <div className="relative">
      {/* Flipbook Hero Sections */}
      <FlipbookHero />
      <BrowseSection />
     
      <FeaturedVehicles />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  )
}

export default Home