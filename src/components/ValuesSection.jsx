import React from 'react'

    export default function ValuesSection() {
      const values = [
        { title: 'Innovation', description: 'We embrace creativity and new ideas.' },
        { title: 'Collaboration', description: 'We believe in the power of teamwork.' },
        { title: 'Empowerment', description: 'We provide opportunities for growth.' },
        { title: 'Integrity', description: 'We act with honesty and transparency.' }
      ]

      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Our Values" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Values</h2>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                      <p className="text-neutral-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
