import React from 'react'

    export default function ActivitiesSection() {
      const activities = [
        { title: 'Workshops', description: 'Hands-on learning experiences.' },
        { title: 'Mentorship', description: 'Guidance from industry experts.' },
        { title: 'Networking', description: 'Connect with like-minded individuals.' },
        { title: 'Competitions', description: 'Showcase your skills and win prizes.' }
      ]

      return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Activities</h2>
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="bg-[#F0F0F0] p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-2">{activity.title}</h3>
                      <p className="text-neutral-600">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://picsum.photos/800/600?grayscale" 
                  alt="Our Activities" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      )
    }
