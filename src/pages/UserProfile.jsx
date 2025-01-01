import React from "react";
import UserSideBar from "../components/UserSideBar";
import UserContent from "../components/UserContent";

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 my-5">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="col-span-1">
          <UserSideBar />
        </div>
        <div className="col-span-4">
          <UserContent />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
