import React from 'react'
    import aboutImage from '../assets/images/about.jpg'

    export default function AboutSection() {
      return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">About TYPNI</h2>
                <p className="text-neutral-600 mb-4">
                  TYPNI is a platform dedicated to empowering young innovators and creators. We provide opportunities for young minds to showcase their talents, learn new skills, and connect with like-minded individuals.
                </p>
                <p className="text-neutral-600">
                  Our mission is to foster creativity, innovation, and collaboration among young people worldwide.
                </p>
              </div>
              <div>
                <img 
                  src={aboutImage} 
                  alt="About TYPNI" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )
    }
