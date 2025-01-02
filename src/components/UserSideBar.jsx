import React, { useContext } from "react";
import { FaHeart, FaListAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const UserSideBar = ({ activeTab, setActiveTab }) => {
  const { logOutUser } = useContext(AuthContext);

  const logOutHandler = async () => {
    try {
      await logOutUser();
      // Optionally, you can add logic for after logout, e.g., navigation or state update
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: <FaUserAlt /> },
    { id: "booking", label: "Booking", icon: <FaListAlt /> },
    { id: "favourite", label: "Favourite", icon: <FaHeart /> },
  ];

  return (
    <div className="bg-green-50 py-4 px-6 rounded-md min-h-72">
      <h1 className="text-xl font-semibold text-gray-800">User Profile</h1>
      <ul className="mt-8 space-y-4">
        {tabs.map((tab) => (
          <li key={tab.id} className="lg:border-b border-green-500 pb-1">
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-semibold cursor-pointer flex items-center gap-3 transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-green-500"
                  : "text-gray-700 hover:text-green-500"
              }`}
            >
              <span className="text-green-500">{tab.icon}</span>
              {tab.label}
            </button>
          </li>
        ))}
        <li className="lg:border-b border-green-500 pb-1">
          <button
            onClick={logOutHandler}
            className="text-lg font-semibold cursor-pointer flex items-center gap-3 text-gray-700 hover:text-red-500 transition-colors duration-200"
          >
            <span className="text-green-500">
              <FaSignOutAlt />
            </span>
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserSideBar;
