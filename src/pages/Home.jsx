import React from "react";
import Hero from "../components/Hero";
import HomeCategory from "../components/HomeCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto my-10">
        <h3 className="text-2xl font-bold mb-3 border-b border-green-500 pb-1">
          For <span className="text-green-500">Rent</span>
        </h3>
        <HomeCategory status="Rent" />
      </div>
      <div className="container mx-auto my-10">
        <h3 className="text-2xl font-bold mb-3 border-b border-green-500 pb-1">
          For <span className="text-green-500">Sale</span>
        </h3>
        <HomeCategory status="Sale" />
      </div>
    </div>
  );
};

export default Home;
