import React from "react";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <PageHero title="About" />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our <span className="text-green-500">Mission</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At <span className="font-semibold">Home Booking</span>, we are
                dedicated to helping individuals and families find homes where
                they can live comfortably, safely, and happily. Our goal is to
                simplify the buying and renting process, making it accessible
                and stress-free for everyone.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* What We Offer Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/276728/pexels-photo-276728.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="What We Offer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What We <span className="text-green-500">Offer</span>
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>
                  **Wide Range of Listings**: From affordable apartments to
                  luxurious villas, find the perfect home tailored to your
                  needs.
                </li>
                <li>
                  **Easy-to-Use Platform**: Navigate our website effortlessly
                  using advanced filters to narrow down properties by price,
                  location, and more.
                </li>
                <li>
                  **Verified Listings**: We ensure every property is legitimate
                  and accurately described, so you can trust what you see.
                </li>
                <li>
                  **Expert Assistance**: Our team is ready to help, offering
                  personalized advice and answering all your questions.
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our <span className="text-green-500">Vision</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where finding a home is a joyful experience.
                By combining technology, innovation, and a human touch, we aim
                to empower individuals to discover spaces where they can truly
                belong.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/164516/pexels-photo-164516.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Vision"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              What Our <span className="text-green-500">Clients Say</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  “This platform made finding my dream home so easy! The process
                  was smooth, and the support team was incredibly helpful.”
                </p>
                <h4 className="text-gray-800 font-semibold">- Sarah L.</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  “I rented my first apartment through Home Booking. The
                  listings were accurate, and I found a place within days.”
                </p>
                <h4 className="text-gray-800 font-semibold">- John D.</h4>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  “The platform’s filters helped me narrow down exactly what I
                  wanted. I highly recommend it to anyone looking for a home!”
                </p>
                <h4 className="text-gray-800 font-semibold">- Maria P.</h4>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in <span className="text-green-500">Touch</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions or need help? Our team is here to assist you. Reach
              out to us anytime!
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
