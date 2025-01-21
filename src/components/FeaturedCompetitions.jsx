import React from 'react'
    import { motion } from 'framer-motion'
    import competitionImage from '../assets/images/competition.jpg'

    export default function FeaturedCompetitions() {
      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Featured Competitions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* TYPNI UI/UX Competition Card */}
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={competitionImage} 
                  alt="TYPNI UI/UX Competition" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">TYPNI UI/UX Website Design Competition</h3>
                <p className="text-neutral-600 mb-4">
                  Showcase your design skills and win amazing prizes!
                </p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
                  Learn More
                </button>
              </motion.div>
              {/* Add more competition cards here */}
            </div>
          </div>
        </section>
      )
    }
