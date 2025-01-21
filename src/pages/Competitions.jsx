import React from 'react'
    import { motion } from 'framer-motion'

    export default function Competitions() {
      return (
        <div className="bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Explore Our Competitions
                </h1>
                <p className="text-xl mb-8">
                  Join us and showcase your creativity!
                </p>
              </motion.div>
            </div>
          </section>

          {/* Competitions Grid */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-8">All Competitions</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* UI/UX Competition */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-4">UI/UX Website Design Competition</h3>
                  <p className="text-neutral-600 mb-4">
                    Win $1500 USD! Showcase your creativity in designing a modern and user-friendly website.
                  </p>
                  <a href="/ux-competition" className="text-secondary hover:text-primary">
                    Learn More →
                  </a>
                </motion.div>

                {/* Logo Design Competition */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold mb-4">Logo Design Competition</h3>
                  <p className="text-neutral-600 mb-4">
                    Create a memorable logo that represents your brand's identity and appeal.
                  </p>
                  <a href="/logo-competition" className="text-secondary hover:text-primary">
                    Learn More →
                  </a>
                </motion.div>

                {/* Add more competition cards as needed */}
              </div>
            </div>
          </section>
        </div>
      )
    }
