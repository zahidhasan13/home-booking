import React, { useContext } from "react";
import { PropertyContext } from "../context/ProperyProvider";
import PropertyCard from "./PropertyCard";

const HomeCategory = ({ status }) => {
  const { property, isLoading } = useContext(PropertyContext);
  const category = property?.filter((pr) => pr?.status === status);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
      {category.slice(0, 4)?.map((cat) => (
        <PropertyCard key={cat?.id} property={cat} />
      ))}
    </div>
  );
};

export default HomeCategory;
