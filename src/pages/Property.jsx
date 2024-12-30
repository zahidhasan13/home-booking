import React from "react";
import PageHero from "../components/PageHero";
import ApartmentSearchForm from "../components/ApartmentSearchForm";
import AllProperty from "../components/AllProperty";
import PropertyFilters from "../components/PropertyFilters";
import { CiFilter } from "react-icons/ci";

const Property = () => {
  return (
    <div>
      <PageHero title="Property" />
      <div className="container mx-auto bg-[#f1f3f7] p-4">
        <div className="my-5 bg-white p-4 rounded-lg shadow-md">
          <ApartmentSearchForm />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5 mt-14">
          <div className="col-span-1">
            <div className="lg:hidden flex items-center justify-between pb-4 bg-green-50 p-4 rounded-md shadow-lg mb-10">
              <span className="text-xl font-bold">Filters</span>
              <button className="text-sm font-semibold flex items-center gap-1 text-green-700">
                <span>
                  <CiFilter />
                </span>{" "}
                Filter
              </button>
            </div>
            <div className="hidden lg:block">
              <PropertyFilters />
            </div>
          </div>
          <div className="col-span-3">
            <AllProperty />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
