export default function About() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-neutral-600">
                To inspire and empower designers through innovative competitions
                and community engagement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="text-neutral-600">
                Meet our passionate team of design enthusiasts and industry experts.
              </p>
            </div>
          </div>
        </div>
      )
    }
