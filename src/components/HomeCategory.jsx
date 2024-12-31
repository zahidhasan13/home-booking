import React, { useContext } from "react";
import { PropertyContext } from "../context/ProperyProvider";
import PropertyCard from "./PropertyCard";
import PropertySkeleton from "./PropertySkeleton";

const HomeCategory = ({ status }) => {
  const { property, isLoading } = useContext(PropertyContext);
  const category = property?.filter((pr) => pr?.status === status);
  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <PropertySkeleton key={index} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {category?.slice(0, 4)?.map((cat) => (
          <PropertyCard key={cat?.id} property={cat} />
        ))}
      </div>
    </>
  );
};

export default HomeCategory;
