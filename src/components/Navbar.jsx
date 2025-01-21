import React from 'react'
    import { Link } from 'react-router-dom'
    import { motion } from 'framer-motion'

    export default function Navbar() {
      return (
        <motion.nav 
          className="sticky top-0 bg-white shadow-md z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
              TYPNI
            </Link>
            <div className="space-x-8 hidden md:flex">
              <Link to="/competitions">Competitions</Link>
              <Link to="/ux-competition">UI/UX Competition</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </motion.nav>
      )
    }
