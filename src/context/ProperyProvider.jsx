import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";

export const PropertyContext = createContext();

const ProperyProvider = ({ children }) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["dataKey"], // Unique key for the query
    queryFn: () => fetch("./db.json").then((res) => res.json()),
  });
  // setProperties(data?.property);
  // console.log(data?.property);
  const property = {
    property: data?.property,
    isLoading,
    isError,
    error,
  };
  return (
    <PropertyContext.Provider value={property}>
      {children}
    </PropertyContext.Provider>
  );
};

export default ProperyProvider;
