import React from "react";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            About Gurkhas Construction
          </h1>
          <p className="mt-2 text-lg md:text-xl">
            Building excellence across the UK for over 25 years
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2012 by Pramish Kumar Shrestha, Gurkhas Construction
            began as a small family business with a simple mission: to deliver
            exceptional construction services with integrity, quality, and
            craftsmanship that stands the test of time.
          </p>
          <p className="text-gray-600 mb-4">
            Over the past 16 years, we have grown from a local contractor to one
            of the UK's most trusted construction companies, completing over 150
            successful projects across London, Manchester, Birmingham, and
            beyond.
          </p>
          <p className="text-gray-600">
            Our name honors the renowned Gurkha tradition of excellence,
            loyalty, and unwavering commitment to quality - values that define
            every project we undertake.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=500&q=80"
            alt="Before Project"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80"
            alt="Before Project"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=500&q=80"
            alt="Before Project"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=500&q=80"
            alt="After Project"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Mission & Values
          </h2>
          <p className="text-gray-600 mb-10">
            We are committed to transforming properties and exceeding
            expectations through quality construction and exceptional service.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl mb-4">🏅</div>
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every project, using only the finest
                materials and skilled craftsmen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600">
                Honest communication, transparent pricing, and reliable service
                are the foundation of our client relationships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-blue-500 text-3xl mb-4">💡</div>
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace modern techniques and sustainable practices to
                deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 mb-10">
            Our experienced leadership team brings decades of construction
            expertise to every project.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80"
                alt="Raj Gurung"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Raj Gurung</h3>
              <p className="text-blue-600 font-medium">
                Founder & Managing Director
              </p>
              <p className="text-sm text-gray-500 mb-2">25+ Years</p>
              <p className="text-gray-600 text-sm">
                Raj founded Gurkhas Construction with a vision to deliver
                exceptional services across the UK.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80"
                alt="Sarah Thompson"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Sarah Thompson</h3>
              <p className="text-blue-600 font-medium">Head of Design</p>
              <p className="text-sm text-gray-500 mb-2">15+ Years</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our design team, ensuring every project combines
                functionality with stunning aesthetics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80"
                alt="Mike Johnson"
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg">Mike Johnson</h3>
              <p className="text-blue-600 font-medium">Project Manager</p>
              <p className="text-sm text-gray-500 mb-2">20+ Years</p>
              <p className="text-gray-600 text-sm">
                Mike oversees all construction projects, ensuring they are
                completed on time and to the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
