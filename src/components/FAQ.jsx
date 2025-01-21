import React, { useState } from 'react'

    const faqs = [
      { question: 'Who can participate?', answer: 'Anyone aged 18-35 can participate.' },
      { question: 'What is the team size?', answer: 'Teams must consist of 3 members.' },
      { question: 'How to submit?', answer: 'Email your submission to niaje@typni.com.' }
    ]

    export default function FAQ() {
      const [activeIndex, setActiveIndex] = useState(null)

      const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
      }

      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  {activeIndex === index && (
                    <p className="mt-2 text-neutral-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
