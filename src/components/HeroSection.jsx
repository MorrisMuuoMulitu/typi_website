import React from 'react'
    import { motion } from 'framer-motion'
    import heroVideo from '../assets/images/hero-bg.mp4'
    import Lottie from 'lottie-react'
    import scrollDownAnimation from '../assets/animations/scroll-down.json'

    export default function HeroSection() {
      return (
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>

          {/* Content */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to TYPNI
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Where Creativity Meets Innovation
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all transform hover:scale-105">
                Explore Competitions
              </button>
            </motion.div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <Lottie animationData={scrollDownAnimation} className="w-16 h-16" />
          </div>
        </section>
      )
    }
