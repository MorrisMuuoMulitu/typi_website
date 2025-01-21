import React from 'react'
    import blog1 from '../assets/images/blog1.jpg'
    import blog2 from '../assets/images/blog2.jpg'

    export default function BlogSection() {
      const posts = [
        {
          image: blog1,
          title: 'Top Design Trends for 2024',
          excerpt: 'Discover the latest trends shaping the future of design.'
        },
        {
          image: blog2,
          title: 'How to Win Design Competitions',
          excerpt: 'Tips and tricks to stand out in design competitions.'
        }
      ]

      return (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <div key={index} className="bg-[#F0F0F0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
