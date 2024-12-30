import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="py-10 bg-cover bg-bottom bg-blend-darken"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/1776574/pexels-photo-1776574.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-5 lg:px-20">
        {/* Left Section */}
        <div className="text-white space-y-5 w-full lg:w-[80%] lg:justify-self-end text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Find Your Dream Home Today
          </h1>
          <p className="text-sm lg:text-base font-semibold">
            Whether you're looking to rent or buy, we make it easy to discover
            the perfect home that fits your lifestyle and budget. Browse a wide
            range of properties, from cozy apartments to spacious family homes,
            and take the first step toward your new beginning.
          </p>
          <Link to="/property" className="inline-block">
            <button className="btn-primary">
              Your next home is just a click away!
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-3xl w-full lg:w-[80%]">
          <h3 className="text-2xl font-bold mb-5 text-center lg:text-left">
            Home Reservation
          </h3>
          <form className="space-y-3">
            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter Location"
                className="mt-1 px-3 py-1 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                className="mt-1 px-3 py-1 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
              >
                <option value="">All</option>
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                className="mt-1 px-3 py-1 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
              >
                <option value="">All</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="penthouse">Penthouse</option>
                <option value="cottage">Cottage</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
                <option value="farmhouse">Farmhouse</option>
              </select>
            </div>

            {/* Furnished */}
            <div>
              <label
                htmlFor="furnished"
                className="block text-sm font-medium text-gray-700"
              >
                Furnished
              </label>
              <select
                id="furnished"
                className="mt-1 px-3 py-1 w-full border border-gray-300 rounded focus:outline-none focus:border-green-500"
              >
                <option value="">All</option>
                <option value="furnished">Full Furnished</option>
                <option value="semifurnished">Semi Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="btn-primary w-full lg:w-auto">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
