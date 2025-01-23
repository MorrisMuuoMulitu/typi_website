import React from 'react'
import { motion } from 'framer-motion'

// Custom SVG Icons
const TrophyIcon = () => (
  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

const UploadIcon = () => (
  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
)

// Rest of the component remains the same...
export default function UxCompetition() {
  return (
    <div className="bg-white">
      {/* Hero Section remains the same... */}

      {/* Integrated Content Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Poster Image */}
            <motion.div
              className="flex justify-center lg:sticky lg:top-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://ik.imagekit.io/5zp8ovb7c/Niaje/niaje%20(1).jpg?updatedAt=1737457353151"
                alt="TYPNI UI/UX Competition Banner"
                className="w-full max-w-2xl rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Competition Details */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Competition Details</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Prize */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <TrophyIcon />
                    <h3 className="text-xl font-semibold ml-2">Prize</h3>
                  </div>
                  <p className="text-neutral-600">
                    $1500 USD for the winning team, plus recognition on our platform.
                  </p>
                </motion.div>

                {/* Requirements */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <UploadIcon />
                    <h3 className="text-xl font-semibold ml-2">Requirements</h3>
                  </div>
                  <ul className="list-disc list-inside text-neutral-600">
                    <li>Youthful and innovative design</li>
                    <li>Mobile-first approach</li>
                    <li>Accessibility compliance</li>
                    <li>Unique features</li>
                  </ul>
                </motion.div>

                {/* Participation Criteria */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <UsersIcon />
                    <h3 className="text-xl font-semibold ml-2">Participation</h3>
                  </div>
                  <ul className="list-disc list-inside text-neutral-600">
                    <li>Group of 3 members</li>
                    <li>Age 18-35</li>
                    <li>Submit 3 previous works</li>
                    <li>Technical proposal</li>
                  </ul>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  className="bg-[#F0F0F0] p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <CalendarIcon />
                    <h3 className="text-xl font-semibold ml-2">Timeline</h3>
                  </div>
                  <div className="space-y-2 text-neutral-600">
                    <p>Launch: 11/01/2025</p>
                    <p>Submission: 11/02/2025</p>
                    <p>Voting: 25/02/2025 - 04/03/2025</p>
                    <p>Winner Announcement: 07/03/2025</p>
                  </div>
                </motion.div>
              </div>

              {/* Submission Guidelines */}
              <section className="py-16">
                <h2 className="text-3xl font-bold text-primary mb-8">Submission Guidelines</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-primary font-bold text-lg mb-2">Step 1</div>
                    <h3 className="text-xl font-semibold mb-4">Register Your Team</h3>
                    <p className="text-neutral-600">
                      Create a team of 3 members and register on our platform.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-primary font-bold text-lg mb-2">Step 2</div>
                    <h3 className="text-xl font-semibold mb-4">Prepare Your Submission</h3>
                    <p className="text-neutral-600">
                      Include your design concept, technical proposal, and previous works.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-primary font-bold text-lg mb-2">Step 3</div>
                    <h3 className="text-xl font-semibold mb-4">Submit Before Deadline</h3>
                    <p className="text-neutral-600">
                      Email your submission to niaje@typni.com before 11/02/2025.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
