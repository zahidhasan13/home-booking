import React, { useContext } from "react";
import { PropertyContext } from "../context/ProperyProvider";
import PropertyCard from "./PropertyCard";
import PropertySkeleton from "./PropertySkeleton";

const AllProperty = () => {
  const { property, isLoading } = useContext(PropertyContext);
  console.log(property);
  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <PropertySkeleton key={index} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {property?.map((pr) => (
          <PropertyCard key={pr.id} property={pr} />
        ))}
      </div>
    </>
  );
};

export default AllProperty;
