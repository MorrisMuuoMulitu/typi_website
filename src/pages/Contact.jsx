import React from 'react'

    export default function Contact() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-neutral-400 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-neutral-400 rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full p-2 border border-neutral-400 rounded-lg"
                  rows="4"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-2">
                <p>Email: niaje@typni.com</p>
                <p>Phone: +254705329860</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
