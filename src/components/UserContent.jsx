import React from "react";
import ProfileDetails from "./ProfileDetails";
import BookingDetails from "./BookingDetails";
import FavouriteDetails from "./FavouriteDetails";

const UserContent = ({ activeTab }) => {
  return (
    <div className="bg-green-50 p-4 rounded-md min-h-72">
      {activeTab === "profile" && <ProfileDetails />}
      {activeTab === "booking" && <BookingDetails />}
      {activeTab === "favourite" && <FavouriteDetails />}
    </div>
  );
};

export default UserContent;
