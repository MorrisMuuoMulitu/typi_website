import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">TYPNI</h3>
            <p className="text-neutral-400">Innovating design through competition</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/competitions">Competitions</Link>
                <ul className="ml-4 space-y-2">
                  <li><Link to="/ux-competition">UI/UX Competition</Link></li>
                  <li><Link to="/logo-competition">Logo Design Competition</Link></li>
                </ul>
              </li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="text-neutral-400 space-y-2">
              <li>Email: niaje@typni.com</li>
              <li>Phone: +254705329860</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 rounded-l-lg border border-neutral-400"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-neutral-400 flex items-center justify-center space-x-4">
          <p>
            Designed by <a href="https://ottopad.lovable.app" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ottopad</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
