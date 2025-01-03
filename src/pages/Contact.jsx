import React from "react";
import PageHero from "../components/PageHero";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div>
      <PageHero title="Contact" />
      <div className="bg-green-50 py-12">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="mt-1 px-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Contact Details
              </h2>
              <p className="text-gray-600">
                We’re always happy to hear from you. Use the details below to
                get in touch or visit us in person.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <MdOutlinePhoneInTalk className="text-2xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <IoMailOutline className="text-2xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@yourwebsite.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 p-3 rounded-full text-white">
                    <IoLocationOutline className="text-2xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      123 Main Street, New York, NY 10001, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-0 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03615786845!2d-74.30934159824935!3d40.6975399481381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1735636057164!5m2!1sen!2sbd"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
