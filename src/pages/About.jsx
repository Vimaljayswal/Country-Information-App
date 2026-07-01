import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">About GeoNation Portal</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Explore countries around the world and discover important
          geographical, cultural, and demographic information through
          one powerful platform.
        </p>
      </section>

      {/* About Project */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          What is GeoNation Portal?
        </h2>

        <p className="text-gray-700 text-lg leading-8 text-center">
          GeoNation Portal is a web application developed to provide
          detailed information about countries across the globe.
          Users can search for any country and instantly access
          information such as its capital city, population,
          currency, region, languages, flag, and more.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide easy access to reliable country information
              and promote geographical awareness among students,
              travelers, and researchers.
            </p>
          </div>

          <div className="shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted platform for exploring countries,
              cultures, and global diversity through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">
                🌍 Country Search
              </h3>
              <p>
                Search and explore information about any country.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">
                📊 Detailed Information
              </h3>
              <p>
                View population, capital, currency, region, and languages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-3">
                🚀 Fast & Responsive
              </h3>
              <p>
                Modern UI with quick search and responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Developed By
          </h2>

          <p className="text-lg text-gray-700">
            This project was developed as a web development project
            using React, HTML, CSS, JavaScript, and APIs to provide
            users with an interactive way to explore countries.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold">
              Vimal Jaiswal
            </h3>
            <p className="text-gray-600">
              B.Tech Student & Front-End Developer
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>
          © 2026 GeoNation Portal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;