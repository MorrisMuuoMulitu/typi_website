import React from 'react'

    export default function Footer() {
      return (
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">TYPNI</h3>
                <p className="text-sm">Empowering young innovators through creativity and collaboration.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm hover:underline">About</a></li>
                  <li><a href="/competitions" className="text-sm hover:underline">Competitions</a></li>
                  <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
                  <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                <p className="text-sm">Email: niajee@typni.com</p>
                <p className="text-sm">Phone: +254705329860</p>
              </div>
            </div>
          </div>
        </footer>
      )
    }
