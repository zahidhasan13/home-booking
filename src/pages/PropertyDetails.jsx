import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PropertyContext } from "../context/ProperyProvider";
import HomeCategory from "../components/HomeCategory";
import { FaBath, FaBed } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const { property, isLoading } = useContext(PropertyContext);
  const singleProperty = property?.find((pr) => pr?.id == id);
  console.log(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 lg:px-0">
        <div className="relative">
          <img
            src={singleProperty.image}
            alt={singleProperty.title}
            className="rounded-md object-cover w-full"
          />
          <span className="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">
            {singleProperty.status}
          </span>
        </div>
        <div className="space-y-4 bg-green-50 p-4 rounded-md">
          <h2
            className="text-2xl md:text-4xl font-semibold truncate"
            title={singleProperty.title}
          >
            {singleProperty.title}
          </h2>
          <p className="text-base md:text-lg font-semibold">
            Property Type: {singleProperty.propertyType}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Area: {singleProperty.area}
          </p>
          <p className="text-base md:text-lg font-semibold flex items-center gap-2">
            Bedroom:
            <span>
              <FaBed />
            </span>
            {singleProperty.bedroom}
          </p>
          <p className="text-base md:text-lg font-semibold flex items-center gap-2">
            Bathroom:{" "}
            <span>
              <FaBath />
            </span>{" "}
            {singleProperty.bathroom}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Furnished: {singleProperty.furnished}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Facilities: {singleProperty.facilities}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Location: {singleProperty.location}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Description: {singleProperty.description}
          </p>
          <p className="text-base md:text-lg font-semibold">
            Price:{" "}
            <span className="text-xl md:text-2xl font-bold text-green-500">
              {singleProperty.price}
            </span>
          </p>
          <div className="space-y-2 md:space-y-0 md:space-x-2">
            <button className="btn-primary w-full md:w-auto">Book Now</button>
            <button className="btn-secondary w-full md:w-auto">
              Add to Favourite
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5 px-4 lg:px-0">
        <h3 className="text-2xl font-bold mb-3 border-b border-green-500 pb-1">
          Related <span className="text-green-500">Property</span>
        </h3>
        <HomeCategory status={singleProperty.status} />
      </div>
    </>
  );
};

export default PropertyDetails;
