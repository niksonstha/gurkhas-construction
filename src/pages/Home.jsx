import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664303818558-bc3044d093ea?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Gurkhas Construction
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Building Quality, Creating Comfort
          </p>
          <p className="mt-2 max-w-2xl mx-auto">
            Professional construction services across the UK. From house
            extensions to complete refurbishments, we deliver excellence in
            every project.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/quote"
              className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/projects"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We specialize in transforming your property with professional
          construction services
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
          {[
            {
              title: "House Extensions",
              desc: "Expand your living space with expertly designed and built extensions.",
              icon: "🏠",
              color: "bg-blue-100 text-blue-600",
            },
            {
              title: "Loft Conversions",
              desc: "Transform your loft into a beautiful, functional living space.",
              icon: "🏗️",
              color: "bg-green-100 text-green-600",
            },
            {
              title: "Refurbishments",
              desc: "Complete property renovations to modernize and enhance your home.",
              icon: "🔨",
              color: "bg-purple-100 text-purple-600",
            },
            {
              title: "Interior Design",
              desc: "Professional interior design services to create your perfect space.",
              icon: "🎨",
              color: "bg-pink-100 text-pink-600",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${service.color} text-3xl`}
              >
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {service.title}
              </h3>
              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose{" "}
              <span className="text-blue-600">Gurkhas Construction?</span>
            </h2>
            <p className="mt-4 text-gray-600">
              With decades of experience, we provide unmatched quality and
              customer satisfaction. Our team ensures every project is delivered
              on time, within budget, and to the highest standards.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "⏳",
                  title: "25+ Years Experience",
                  desc: "Trusted expertise in construction across the UK.",
                },
                {
                  icon: "🏆",
                  title: "Quality Guaranteed",
                  desc: "Top materials & skilled craftsmanship.",
                },
                {
                  icon: "🛡️",
                  title: "Fully Insured",
                  desc: "Peace of mind with comprehensive coverage.",
                },
                {
                  icon: "💬",
                  title: "Free Consultations",
                  desc: "No-obligation consultations & detailed quotes.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <img
              src="https://source.unsplash.com/600x400/?construction,team"
              alt="construction team"
              className="rounded-2xl shadow-lg"
            />

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">250+</p>
              <p className="text-sm">Projects Completed</p>
            </div>

            <div className="absolute -top-6 -right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Recent Projects
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our latest completed construction projects
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Modern House Extension",
                desc: "A stunning two-story extension in London.",
                loc: "London, UK",
                img: "https://images.unsplash.com/photo-1592839656073-833413ae8874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Luxury Loft Conversion",
                desc: "Complete loft transformation in Manchester.",
                loc: "Manchester, UK",
                img: "https://plus.unsplash.com/premium_photo-1746896139366-e102f6950968?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Complete Refurbishment",
                desc: "Full property renovation in Birmingham.",
                loc: "Birmingham, UK",
                img: "https://plus.unsplash.com/premium_photo-1676525800284-2bb7c87c7741?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{project.desc}</p>

                  {/* Location */}
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21s-6-5.686-6-11a6 6 0 1112 0c0 5.314-6 11-6 11z"
                      />
                    </svg>
                    {project.loc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call To Action */}
          <div className="mt-12">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
        <p className="mt-2">
          Get a free, no-obligation quote for your construction project today
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/quote"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get Free Quote
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
