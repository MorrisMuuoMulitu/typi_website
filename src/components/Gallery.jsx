import React from 'react'
    import { motion } from 'framer-motion'
    import avatar1 from '../assets/images/avatars/avatar1.jpg'
    import avatar2 from '../assets/images/avatars/avatar2.jpg'
    import avatar3 from '../assets/images/avatars/avatar3.jpg'

    export default function Gallery() {
      const images = [avatar1, avatar2, avatar3]

      return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Previous Winners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <motion.div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={image} 
                    alt={`Winner ${index + 1}`} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                    <h3 className="text-lg font-semibold">Winner {index + 1}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )
    }
