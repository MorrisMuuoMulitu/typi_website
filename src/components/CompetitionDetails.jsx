import React from 'react'
    import { motion } from 'framer-motion'

    const details = [
      {
        icon: '🏆',
        title: 'Prize',
        description: '$1500 USD for the winning team, plus recognition on our platform.'
      },
      {
        icon: '📅',
        title: 'Timeline',
        description: 'Launch: 11/01/2025, Submission: 11/02/2025, Winner Announcement: 07/03/2025'
      },
      {
        icon: '👥',
        title: 'Participation',
        description: 'Group of 3 members, age 18-35, submit 3 previous works, technical proposal.'
      },
      {
        icon: '📝',
        title: 'Requirements',
        description: 'Youthful appeal, unique features, mobile-first design, accessibility.'
      }
    ]

    export default function CompetitionDetails() {
      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Competition Details</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {details.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
    }
