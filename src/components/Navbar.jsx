import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Navbar() {
      return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              TYPNI
            </Link>
            <div className="space-x-8 hidden md:flex">
              <Link to="/about" className="text-neutral-600 hover:text-primary">About</Link>
              <Link to="/competitions" className="text-neutral-600 hover:text-primary">Competitions</Link>
              <Link to="/blog" className="text-neutral-600 hover:text-primary">Blog</Link>
              <Link to="/contact" className="text-neutral-600 hover:text-primary">Contact</Link>
            </div>
          </div>
        </nav>
      )
    }
