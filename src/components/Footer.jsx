import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className="col-span-3 space-y-5">
          <Link to="/">
            <span className="text-2xl font-bold uppercase">
              home <span className="text-green-500">booking</span>
            </span>
          </Link>
          <p className="text-sm font-semibold">
            Home Booking offers you a secure and reliable platform for finding
            and booking your dream vacation rental. We've been connecting
            travelers with exceptional homes for 3.5 years, with 7574 satisfied
            guests.
          </p>
          <p className="text-sm font-semibold">
            Our platform and services are designed to make your travel planning
            effortless, ensuring a comfortable, safe, and memorable stay in your
            chosen destination. Experience the ease and joy of home booking with
            Enjoy Home Booking.
          </p>
        </div>

        <div className="col-span-2">
          <h3 className="text-2xl font-semibold mb-4 border-b border-green-500 pb-3">
            Contact Info
          </h3>
          <div className="flex items-center gap-3 mb-5">
            <IoLocationOutline className="text-2xl" />
            <p className="text-lg font-semibold">123 Main St, Anytown</p>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <MdOutlinePhoneInTalk className="text-2xl" />
            <p className="text-lg font-semibold">+1 123-456-7890</p>
          </div>
          <div className="flex items-center gap-3">
            <IoMailOutline className="text-2xl" />
            <p className="text-lg font-semibold">info@example.com</p>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 border-b border-green-500 pb-3">
              Follow On
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white text-2xl border border-green-500 rounded-md p-1 hover:bg-sky-600 hover:border-sky-600 transition-all duration-300"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-green-500 rounded-md p-1 hover:bg-rose-600 hover:border-rose-600 transition-all duration-300"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="text-white text-2xl border border-green-500 rounded-md p-1 hover:bg-sky-400 hover:border-sky-400 transition-all duration-300"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-2xl font-semibold mb-4 border-b border-green-500 pb-3">
            Contact Form
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-2 bg-transparent border border-green-700 rounded-md focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-transparent border border-green-700 rounded-md focus:outline-none focus:border-white"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="2"
                placeholder="Message"
                className="w-full px-4 py-2 bg-transparent border border-green-700 rounded-md focus:outline-none focus:border-white"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="text-green-500 hover:text-green-700 transition-all duration-300"
          >
            Home Booking
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
