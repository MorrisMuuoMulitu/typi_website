import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Enhanced Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="p-3 rounded-lg focus:outline-none hover:bg-primary/10 transition-colors duration-200"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="w-8 h-8 relative flex flex-col justify-center items-center">
          <span className={`block h-[3px] w-8 bg-primary rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-2'}`} />
          <span className={`block h-[3px] w-8 bg-primary rounded-full transition-opacity duration-300 mt-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-[3px] w-8 bg-primary rounded-full transition-all duration-300 mt-2 ${isOpen ? '-rotate-45 -translate-y-[1px]' : 'translate-y-2'}`} />
        </div>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Modern Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl"
            aria-label="Main navigation"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-neutral-200">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <ul className="flex-1 px-6 py-8 space-y-2">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    aria-label="Home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    aria-label="About"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/competitions"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    aria-label="Competitions"
                  >
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-3 text-lg text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    aria-label="Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-neutral-200">
                <p className="text-sm text-neutral-500">
                  © 2024 TYPNI. All rights reserved.
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
