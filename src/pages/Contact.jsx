import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Get in touch with our team for your construction project. We're here
            to help bring your vision to life.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-5">
                <li>
                  <p className="font-medium text-gray-800">📞 Phone</p>
                  <p className="text-gray-600">+44 20 1234 5678</p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri: 8:00 AM - 6:00 PM
                  </p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">✉️ Email</p>
                  <p className="text-gray-600">
                    info@gurkhasconstruction.co.uk
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">📍 Office Address</p>
                  <p className="text-gray-600">
                    25 Courtfield Avenue <br /> Harrow, HA1 2JX, UK
                  </p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </li>
                <li>
                  <p className="font-medium text-gray-800">⏰ Business Hours</p>
                  <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </li>
              </ul>
            </div>

            {/* Small Emergency Contact Card */}
            <div className="bg-red-50 border border-red-200 rounded-md p-3 w-fit">
              <h4 className="text-sm font-semibold text-red-700 flex items-center gap-1">
                ⚠️ Emergency Contact
              </h4>
              <p className="text-red-700 text-sm mt-1 font-medium">
                +44 7700 123456
              </p>
              <p className="text-xs text-red-500">
                Available 24/7 for existing clients
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send us a Message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
                  <option>Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Project Consultation</option>
                  <option>Emergency Support</option>
                </select>
              </div>
              <textarea
                rows="4"
                placeholder="Message *"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Find Our Office
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Visit us at our London headquarters
          </p>
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19821.25936494619!2d-0.3517069!3d51.5819231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611dcdd33d10f%3A0x1c56f17c580d77ad!2s25%20Courtfield%20Ave%2C%20Harrow%20HA1%202JX%2C%20UK!5e0!3m2!1sen!2suk!4v1727500000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
