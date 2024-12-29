import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="card shadow-lg hover:shadow-xl p-4 bg-green-50 rounded-md">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="rounded-md"
          />
          <span className="absolute top-2 right-3 bg-green-600 text-white font-bold text-sm p-1 rounded">
            For {property.status}
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <span className="text-green-300 font-bold">
            {property.propertyType}
          </span>
          <h3 className="truncate text-xl font-bold" title={property.title}>
            {property.title}
          </h3>

          <span className="text-2xl text-green-700 font-bold">
            ${property.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
