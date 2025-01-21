import React, { useState, useRef, useEffect } from 'react'
    import { motion, AnimatePresence } from 'framer-motion'

    export default function HamburgerMenu() {
      const [isOpen, setIsOpen] = useState(false)
      const menuRef = useRef(null)

      // Close menu when clicking outside
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false)
          }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
        }
      }, [])

      const toggleMenu = () => {
        setIsOpen(!isOpen)
      }

      const closeMenu = () => {
        setIsOpen(false)
      }

      return (
        <div className="md:hidden">
          {/* Enhanced Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="p-3 rounded-lg focus:outline-none hover:bg-[#F0F0F0] transition-colors duration-200 group"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-full bg-primary rounded-full transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
            </div>
          </button>

          {/* Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={closeMenu}
              />
            )}
          </AnimatePresence>

          {/* Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg"
                aria-label="Main navigation"
              >
                <div className="h-full flex flex-col p-4">
                  <button
                    onClick={closeMenu}
                    className="self-end p-3 rounded-lg hover:bg-[#F0F0F0] transition-colors duration-200"
                    aria-label="Close menu"
                  >
                    <div className="w-6 h-6 relative">
                      <span className="block absolute h-0.5 w-full bg-primary rounded-full rotate-45" />
                      <span className="block absolute h-0.5 w-full bg-primary rounded-full -rotate-45" />
                    </div>
                  </button>

                  <ul className="flex flex-col space-y-4 mt-8">
                    <li>
                      <a
                        href="/"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-neutral-600 hover:text-primary hover:bg-[#F0F0F0] rounded-lg transition-colors duration-200"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-neutral-600 hover:text-primary hover:bg-[#F0F0F0] rounded-lg transition-colors duration-200"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-neutral-600 hover:text-primary hover:bg-[#F0F0F0] rounded-lg transition-colors duration-200"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        onClick={closeMenu}
                        className="block px-4 py-3 text-neutral-600 hover:text-primary hover:bg-[#F0F0F0] rounded-lg transition-colors duration-200"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      )
    }
