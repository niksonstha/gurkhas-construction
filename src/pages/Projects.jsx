import React, { useState } from "react";
import { MapPin, Ruler, Clock } from "lucide-react";

const projectsData = [
  {
    title: "Victorian Terrace Extension",
    category: "House Extensions",
    year: 2024,
    description:
      "A stunning two-story rear extension adding 45sqm of living space including a modern kitchen-diner and master bedroom suite.",
    location: "London, UK",
    size: "45 sqm",
    duration: "8 weeks",
    image:
      "https://images.unsplash.com/photo-1627141234469-24711efb373c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Luxury Loft Conversion",
    category: "Loft Conversions",
    year: 2024,
    description:
      "Complete loft transformation creating a master bedroom suite with walk-in wardrobe and luxury en-suite bathroom.",
    location: "Manchester, UK",
    size: "35 sqm",
    duration: "6 weeks",
    image:
      "https://images.unsplash.com/photo-1668438712649-ffd85f756de5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Complete House Refurbishment",
    category: "Refurbishments",
    year: 2023,
    description:
      "Full property renovation including new kitchen, three bathrooms, flooring throughout, and complete electrical rewiring.",
    location: "Birmingham, UK",
    size: "120 sqm",
    duration: "12 weeks",
    image:
      "https://plus.unsplash.com/premium_photo-1676525800026-03ac07548bcb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Modern Interior Design",
    category: "Interior Design",
    year: 2023,
    description:
      "Stylish redesign of a living and dining area, featuring contemporary finishes, lighting, and custom furniture.",
    location: "Leeds, UK",
    size: "70 sqm",
    duration: "5 weeks",
    image:
      "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categories = [
  "All",
  "House Extensions",
  "Loft Conversions",
  "Refurbishments",
  "Interior Design",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our portfolio of completed construction projects. From house
          extensions to complete refurbishments, see the quality and
          craftsmanship we deliver.
        </p>
      </section>

      {/* Filter Bar */}
      <div className="flex justify-center gap-3 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-blue-600 font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {project.description}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    {project.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-blue-600" />
                    {project.size}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    {project.duration}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Statistics */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Project Statistics
          </h2>
          <p className="text-gray-600 mt-2">
            Our track record speaks for itself
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl font-bold text-blue-600">150+</p>
              <p className="text-gray-700 mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">25+</p>
              <p className="text-gray-700 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">98%</p>
              <p className="text-gray-700 mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">50+</p>
              <p className="text-gray-700 mt-1">Skilled Craftsmen</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h3 className="text-3xl font-bold">Ready to Start Your Project?</h3>
        <p className="mt-4 text-lg">
          Join our satisfied customers and let us transform your property
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/get-quote"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100"
          >
            Get Free Quote
          </a>
          <a
            href="/contact"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
