import React from "react";

const ApartmentSearchForm = () => {
  return (
    <form className="flex gap-4 items-end justify-between">
      <div className="flex-1">
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
          className="mt-1 px-2 py-1 w-full border border-gray-200 rounded focus:outline-none focus:border-green-500"
          required
        />
      </div>

      <div className="flex-1">
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

      <div className="flex-1">
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

      <div className="flex-1">
        <label
          htmlFor="furnished"
          className="block text-sm font-medium text-gray-700"
        >
          Furnished
        </label>
        <select
          id="furnished"
          className="mt-1 px-2 py-1 w-full border border-gray-200 rounded focus:outline-none focus:border-green-500"
        >
          <option value="">All</option>
          <option value="furnished">Furnished</option>
          <option value="semifurnished">Semi Furnished</option>
          <option value="unfurnished">Unfurnished</option>
        </select>
      </div>

      <div className="">
        <button type="submit" className="btn-primary">
          Search
        </button>
      </div>
    </form>
  );
};

export default ApartmentSearchForm;
