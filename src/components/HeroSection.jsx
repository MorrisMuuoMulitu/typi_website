import React from 'react'
    import { motion } from 'framer-motion'
    import { Link } from 'react-router-dom'

    export default function HeroSection() {
      return (
        <section className="relative bg-white overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.svg')] bg-repeat opacity-10"></div>

          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center md:text-left space-y-6">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="block text-secondary">The Young People's</span>
                  <span className="block">Network International</span>
                </motion.h1>

                <motion.p
                  className="text-neutral-600 text-lg md:text-xl max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Empowering young innovators through design, technology, and global collaboration.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link
                    to="/competitions"
                    className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary transition-colors"
                    aria-label="Explore Competitions"
                  >
                    Explore Competitions
                  </Link>
                  <Link
                    to="/about"
                    className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                    aria-label="Learn More About Us"
                  >
                    Learn More
                  </Link>
                </motion.div>

                {/* Social Proof */}
                <motion.div
                  className="pt-8 flex flex-col sm:flex-row items-center gap-4 text-neutral-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="flex -space-x-4">
                    <img
                      src="/src/assets/avatars/avatar1.jpg"
                      alt="Participant 1"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      loading="lazy"
                    />
                    <img
                      src="/src/assets/avatars/avatar2.jpg"
                      alt="Participant 2"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      loading="lazy"
                    />
                    <img
                      src="/src/assets/avatars/avatar3.jpg"
                      alt="Participant 3"
                      className="w-12 h-12 rounded-full border-2 border-white"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-sm">Join <span className="font-semibold">5000+</span> young innovators</p>
                    <p className="text-xs text-neutral-400">From 120+ countries worldwide</p>
                  </div>
                </motion.div>
              </div>

              {/* Visual Element */}
              <motion.div
                className="relative mt-12 md:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/src/assets/hero-illustration.svg"
                  alt="Young innovators collaborating"
                  className="w-full max-w-lg mx-auto"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
      )
    }
