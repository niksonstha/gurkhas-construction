import React from "react";

export default function Quote() {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Get Your Free Quote
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Tell us about your project and we'll provide you with a detailed,
          no-obligation quote within 24 hours
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 mb-12">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number *
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Service Type *
            </label>
            <select className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500">
              <option>Select a service</option>
              <option>House Extensions</option>
              <option>Loft Conversions</option>
              <option>Refurbishments</option>
              <option>Interior Design</option>
            </select>
          </div>

          {/* Property Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Property Address *
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the full property address"
            />
          </div>

          {/* Square Footage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Approximate Square Footage
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 1200 sq ft"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget Range
            </label>
            <select className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500">
              <option>Select budget range</option>
              <option>£10,000 - £25,000</option>
              <option>£25,000 - £50,000</option>
              <option>£50,000+</option>
            </select>
          </div>

          {/* Timeline */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Timeline
            </label>
            <select className="w-full border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-blue-500">
              <option>Select timeline</option>
              <option>ASAP</option>
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6+ months</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Project Description *
            </label>
            <textarea
              className="w-full border rounded-lg p-3 mt-1 h-32 focus:ring-2 focus:ring-blue-500"
              placeholder="Please describe your project in detail..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Get My Free Quote
            </button>
          </div>
        </form>
      </section>

      {/* Why Request Quote Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Why Request a Quote from Us?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-blue-600 text-3xl mb-4">⏱</div>
              <h4 className="text-lg font-semibold">Quick Response</h4>
              <p className="text-gray-600 mt-2">
                Receive your detailed quote within 24 hours of submission.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-blue-600 text-3xl mb-4">💰</div>
              <h4 className="text-lg font-semibold">No Hidden Costs</h4>
              <p className="text-gray-600 mt-2">
                Transparent pricing with detailed breakdown of all costs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-blue-600 text-3xl mb-4">✅</div>
              <h4 className="text-lg font-semibold">No Obligation</h4>
              <p className="text-gray-600 mt-2">
                Free quotes with no pressure to proceed – the choice is yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
