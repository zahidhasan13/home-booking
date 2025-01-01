import React, { useContext } from "react";
import { FaHeart, FaListAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const UserSideBar = () => {
  const { logOutUser } = useContext(AuthContext);

  const logOutHandler = () => {
    logOutUser()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="bg-green-50 py-3 px-5 rounded-md">
      <h1 className="text-xl font-semibold">User Profile</h1>
      <ul className="mt-10 space-y-3">
        <li className="border-b border-green-500 pb-1">
          <button className="text-lg font-semibold cursor-pointer flex items-center gap-3">
            <span className="text-green-500">
              <FaUserAlt />
            </span>{" "}
            Profile
          </button>
        </li>
        <li className="border-b border-green-500 pb-1">
          <button className="text-lg font-semibold cursor-pointer flex items-center gap-3">
            <span className="text-green-500">
              <FaListAlt />
            </span>
            Booking
          </button>
        </li>
        <li className="border-b border-green-500 pb-1">
          <button className="text-lg font-semibold cursor-pointer flex items-center gap-3">
            <span className="text-green-500">
              <FaHeart />
            </span>
            Favourite
          </button>
        </li>
        <li className="border-b border-green-500 pb-1">
          <button
            onClick={logOutHandler}
            className="text-lg font-semibold cursor-pointer flex items-center gap-3"
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
