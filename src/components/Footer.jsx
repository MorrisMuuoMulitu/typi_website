import React from 'react'

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
                  <li><a href="/competitions">Competitions</a></li>
                  <li><a href="/ux-competition">UI/UX Competition</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact</a></li>
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
          </div>
        </footer>
      )
    }
