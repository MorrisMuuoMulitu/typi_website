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

export default function LogoCompetition() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              TYPNI Logo Design Competition
            </h1>
            <p className="text-xl mb-8">
              Create a memorable logo and win $1000 USD!
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-[#F0F0F0] transition-colors">
              Submit Your Design
            </button>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Time Remaining:</h3>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">45</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-sm">Hours</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                $1000 USD for the winning design, plus recognition on our platform.
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
                <li>Original and creative design</li>
                <li>Vector format (SVG, AI, EPS)</li>
                <li>Works in both color and black & white</li>
                <li>Includes typography and icon elements</li>
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
                <li>Open to individuals and teams</li>
                <li>Age 18+</li>
                <li>Maximum 3 entries per participant</li>
                <li>Include design rationale</li>
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
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-[#F0F0F0]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Submission Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold text-lg mb-2">Step 1</div>
              <h3 className="text-xl font-semibold mb-4">Register</h3>
              <p className="text-neutral-600">
                Create an account and complete your profile.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold text-lg mb-2">Step 2</div>
              <h3 className="text-xl font-semibold mb-4">Design</h3>
              <p className="text-neutral-600">
                Create your logo following the competition guidelines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary font-bold text-lg mb-2">Step 3</div>
              <h3 className="text-xl font-semibold mb-4">Submit</h3>
              <p className="text-neutral-600">
                Upload your design before the deadline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Winners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Previous Winners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Winner 1 */}
            <div className="bg-[#F0F0F0] p-6 rounded-lg">
              <img 
                src="https://picsum.photos/400/300?random=1" 
                alt="Winner 1" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">2023 Winner</h3>
              <p className="text-neutral-600">
                "Designing for TYPNI was an incredible experience that pushed my creativity to new heights."
              </p>
            </div>

            {/* Winner 2 */}
            <div className="bg-[#F0F0F0] p-6 rounded-lg">
              <img 
                src="https://picsum.photos/400/300?random=2" 
                alt="Winner 2" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">2022 Winner</h3>
              <p className="text-neutral-600">
                "The competition helped me grow as a designer and connect with amazing creatives."
              </p>
            </div>

            {/* Winner 3 */}
            <div className="bg-[#F0F0F0] p-6 rounded-lg">
              <img 
                src="https://picsum.photos/400/300?random=3" 
                alt="Winner 3" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">2021 Winner</h3>
              <p className="text-neutral-600">
                "Winning this competition opened doors to new opportunities in my design career."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
