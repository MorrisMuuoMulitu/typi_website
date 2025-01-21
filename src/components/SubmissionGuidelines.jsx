import React from 'react'

    const steps = [
      { number: '1', title: 'Register Your Team', description: 'Create a team of 3 members and register on our platform.' },
      { number: '2', title: 'Prepare Your Submission', description: 'Include your design concept, technical proposal, and previous works.' },
      { number: '3', title: 'Submit Before Deadline', description: 'Email your submission to niaje@typni.com before 11/02/2025.' }
    ]

    export default function SubmissionGuidelines() {
      return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Submission Guidelines</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex-1 bg-[#F0F0F0] p-6 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-4">Step {step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
