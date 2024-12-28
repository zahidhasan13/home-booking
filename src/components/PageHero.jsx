import React from "react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const PageHero = ({ title }) => {
  return (
    <div
      className="text-center py-20 space-y-5 bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600'), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
      }}
    >
      <h2 className="text-5xl font-bold uppercase text-white">{title}</h2>
      <div className="flex items-center justify-center gap-1">
        <Link to="/" className="text-2xl text-white/75">
          <MdHome />
        </Link>
        <span className="text-2xl font-bold text-white/75">
          <MdKeyboardArrowRight />
        </span>
        <span className="text-xl font-bold text-white">{title}</span>
      </div>
    </div>
  );
};

export default PageHero;
