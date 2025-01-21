import React from 'react'

    export default function About() {
      return (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-primary mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                TYPNI was founded with the mission to empower young innovators and creators. We believe in the power of collaboration, creativity, and technology to drive positive change in the world.
              </p>
              <p className="text-neutral-600">
                Our platform provides opportunities for young minds to showcase their talents, learn new skills, and connect with like-minded individuals.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-neutral-600">
                We envision a world where every young person has the tools, resources, and opportunities to turn their ideas into reality.
              </p>
            </div>
          </div>
        </div>
      )
    }
