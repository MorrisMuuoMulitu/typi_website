import React from 'react'
    import { Swiper, SwiperSlide } from 'swiper/react'
    import 'swiper/css'

    export default function Testimonials() {
      const testimonials = [
        {
          image: "https://picsum.photos/200/200?grayscale",
          name: 'John Doe',
          role: 'UI/UX Designer',
          quote: 'TYPNI gave me the platform to showcase my skills and connect with amazing people.'
        },
        {
          image: "https://picsum.photos/200/200?grayscale",
          name: 'Jane Smith',
          role: 'Graphic Designer',
          quote: 'The competitions are challenging and rewarding. I highly recommend TYPNI!'
        }
      ]

      return (
        <section className="py-16 bg-[#F0F0F0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">What People Say</h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-2">{testimonial.name}</h3>
                    <p className="text-neutral-600 mb-4">{testimonial.role}</p>
                    <p className="text-neutral-600 italic">"{testimonial.quote}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )
    }
