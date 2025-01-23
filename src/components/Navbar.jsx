import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HamburgerMenu from './HamburgerMenu'
import logo from '../assets/images/logo.jpg'

export default function Navbar() {
  return (
    <motion.nav 
      className="sticky top-0 bg-white shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <motion.img 
            src={logo} 
            alt="TYPNI Logo" 
            className="h-20 md:h-28 lg:h-32 xl:h-36 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="space-x-8 hidden md:flex">
          <Link to="/" className="text-lg lg:text-xl hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-lg lg:text-xl hover:text-primary transition-colors">About</Link>
          <Link to="/services" className="text-lg lg:text-xl hover:text-primary transition-colors">Services</Link>
          <Link to="/contact" className="text-lg lg:text-xl hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <HamburgerMenu />
      </div>
    </motion.nav>
  )
}
