import React from "react";
import PageHero from "../components/PageHero";
import ApartmentSearchForm from "../components/ApartmentSearchForm";
import AllProperty from "../components/AllProperty";

const Property = () => {
  return (
    <div>
      <PageHero title="Property" />
      <div className="container mx-auto bg-[#f1f3f7] p-4">
        <div className="my-5 bg-white p-4 rounded-lg shadow-md">
          <ApartmentSearchForm />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-1"></div>
          <div className="col-span-2">
            <AllProperty />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
