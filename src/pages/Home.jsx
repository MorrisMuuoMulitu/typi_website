import React from 'react'
    import Navbar from '../components/Navbar'
    import HeroSection from '../components/HeroSection'
    import FeaturedCompetitions from '../components/FeaturedCompetitions'
    import AboutSection from '../components/AboutSection'
    import Testimonials from '../components/Testimonials'
    import BlogSection from '../components/BlogSection'
    import CTA from '../components/CTA'
    import Footer from '../components/Footer'

    export default function Home() {
      return (
        <div>
          <Navbar />
          <HeroSection />
          <FeaturedCompetitions />
          <AboutSection />
          <Testimonials />
          <BlogSection />
          <CTA />
          <Footer />
        </div>
      )
    }
