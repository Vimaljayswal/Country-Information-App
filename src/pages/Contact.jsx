import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback about GeoNation Portal?
            We'd be happy to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Get In Touch
            </h2>

            <p className="text-slate-600 mb-8 leading-7">
              GeoNation Portal is dedicated to providing accurate and
              accessible information about countries worldwide. If you have
              any inquiries, collaboration opportunities, or feedback,
              please contact us using the details below.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-slate-600">
                  jaiswalvimal873@gmail.com
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-slate-600">
                  Rewa, Madhya Pradesh, India
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Project Type</h3>
                <p className="text-slate-600">
                  Educational & Country Information Portal
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Developer</h3>
                <p className="text-slate-600">
                  Vimal Jaiswal
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-slate-400 text-center py-6">
        <p>
          © 2026 GeoNation Portal. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;