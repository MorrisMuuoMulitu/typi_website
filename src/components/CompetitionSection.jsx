import React from 'react'

    export default function CompetitionSection() {
      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">TYPNI UI/UX Website Design Competition</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-neutral-600 mb-4">
                Join our annual UI/UX design challenge and showcase your creativity! Win amazing prizes and gain recognition.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      )
    }
