import React from 'react'

    export default function MissionSection() {
      return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-neutral-600 mb-4">
                  To empower young innovators by providing them with the tools, resources, and opportunities to turn their ideas into reality.
                </p>
                <p className="text-neutral-600">
                  We believe in the power of collaboration and creativity to drive positive change in the world.
                </p>
              </div>
              <div>
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Our Mission" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )
    }
