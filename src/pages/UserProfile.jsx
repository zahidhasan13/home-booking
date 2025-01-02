import React, { useState } from "react";
import UserSideBar from "../components/UserSideBar";
import UserContent from "../components/UserContent";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="container mx-auto px-4 lg:px-0 my-5">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-1">
          <UserSideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="lg:col-span-4">
          <UserContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
