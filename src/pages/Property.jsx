import React from "react";
import PageHero from "../components/PageHero";
import ApartmentSearchForm from "../components/ApartmentSearchForm";

const Property = () => {
  return (
    <div>
      <PageHero title="Property" />
      <div className="container mx-auto bg-[#f1f3f7] p-4">
        <div className="my-5 bg-white p-4 rounded-lg shadow-md">
          <ApartmentSearchForm />
        </div>
      </div>
    </div>
  );
};

export default Property;
