import React from "react";
import { MdOutlineLoop } from "react-icons/md";

const PropertyFilters = () => {
  return (
    <div className="bg-green-50 p-4 rounded-md shadow-lg">
      <div className="flex items-center justify-between border-b border-green-500 pb-4">
        <span className="text-xl font-bold">Filters</span>
        <button className="text-sm font-semibold flex items-center gap-1 text-green-700">
          <span>
            <MdOutlineLoop />
          </span>{" "}
          Reset All
        </button>
      </div>
      <div className="mt-5">
        <label
          htmlFor="propertyType"
          className="block text-sm font-medium text-gray-700"
        >
          Property Type
        </label>
        <select
          id="propertyType"
          className="mt-1 px-2 py-1 w-full border border-gray-200 rounded focus:outline-none focus:border-green-500"
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
      <div className="my-5">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </label>
        <select
          id="status"
          className="mt-1 px-2 py-1 w-full border border-gray-200 rounded focus:outline-none focus:border-green-500"
        >
          <option value="">All</option>
          <option value="rent">For Rent</option>
          <option value="sale">For Sale</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-800 mb-4">
          Price Range
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">
              $100,000 - $300,000
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">
              $300,000 - $500,000
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">
              $500,000 - $700,000
            </span>
          </label>
        </div>
      </div>
      <div className="">
        <label className="block text-sm font-semibold text-gray-800 mb-4">
          Bed Room
        </label>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">1 Bed Room</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">2 Bed Room</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">3 Bed Room</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
            />
            <span className="text-gray-700 font-medium">4 Bed Room</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
