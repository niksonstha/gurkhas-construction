import React from "react";

const services = [
  {
    title: "House Extensions",
    description:
      "Expand your living space with expertly designed and built extensions that seamlessly blend with your existing property.",
    image:
      "https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Single and double-story extensions",
      "Kitchen extensions",
      "Rear and side return extensions",
      "Planning permission assistance",
    ],
  },
  {
    title: "Loft Conversions",
    description:
      "Transform your unused loft space into beautiful, functional rooms that add value to your property.",
    image:
      "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Bedroom conversions with en-suite",
      "Home office spaces",
      "Playrooms and entertainment areas",
      "Dormer and roof light installations",
      "Insulation and heating solutions",
    ],
  },
  {
    title: "Complete Refurbishments",
    description:
      "Comprehensive property renovations to modernize and enhance every aspect of your home.",
    image:
      "https://plus.unsplash.com/premium_photo-1676525800026-03ac07548bcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Full property renovations",
      "Kitchen and bathroom refurbishments",
      "Structural alterations",
      "Electrical and plumbing upgrades",
      "Energy efficiency improvements",
    ],
  },
  {
    title: "Interior Design",
    description:
      "Professional interior design services to create stunning, functional spaces tailored to your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Space planning and design",
      "Color schemes and material selection",
      "Custom furniture and fittings",
      "Lighting design",
      "Project management and installation",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50">
      {/* Page header */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We offer comprehensive construction services to transform your
          property. From extensions to complete refurbishments, our expert team
          delivers quality results every time.
        </p>
      </section>

      {/* Service blocks (Zigzag layout) */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              idx % 2 === 1
                ? "md:flex-row-reverse md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                : ""
            }`}
          >
            {/* Image */}
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>

              <h4 className="mt-6 font-medium text-gray-800">
                What's Included:
              </h4>
              <ul className="mt-3 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <svg
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Get Quote for {service.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <section className="py-20 mt-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
          <p className="mt-4 text-gray-600">
            We follow a proven process to ensure your project is completed on
            time, within budget, and to the highest standards.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "Free initial consultation to discuss your requirements and vision for the project.",
              },
              {
                step: "2",
                title: "Design & Planning",
                desc: "Detailed design work and planning permission assistance where required.",
              },
              {
                step: "3",
                title: "Construction",
                desc: "Professional construction work carried out by our skilled team of craftsmen.",
              },
              {
                step: "4",
                title: "Completion",
                desc: "Final inspection and handover of your completed project with full warranty.",
              },
            ].map((p) => (
              <div key={p.step} className="bg-white p-6 rounded-xl shadow">
                <div className="w-10 h-10 mx-auto flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
                  {p.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
