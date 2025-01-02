import React, { useContext, useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const ProfileDetails = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optionally, add logic to update the user profile via API or context
    console.log("Updated Data:", formData);
  };

  return (
    <div className="">
      {/* Edit Icon */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold mb-3 pb-1">
          My <span className="text-green-500">Profile</span>
        </h3>
        <button
          className="text-green-500 text-xl"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? <FaSave /> : <FaEdit />}
        </button>
      </div>
      <hr className="border-green-500" />

      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        <div>
          <p className="text-lg font-semibold text-green-500">Full Name</p>
          {isEditing ? (
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              className="border border-green-500 rounded p-2 w-full"
            />
          ) : (
            <p className="text-lg font-medium">{formData.displayName}</p>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-green-500">Email</p>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-green-500 rounded p-2 w-full"
            />
          ) : (
            <p className="text-lg font-medium">{formData.email}</p>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-green-500">Address</p>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-green-500 rounded p-2 w-full"
            />
          ) : (
            <p className="text-lg font-medium">{formData.address}</p>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-green-500">Mobile Number</p>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-green-500 rounded p-2 w-full"
            />
          ) : (
            <p className="text-lg font-medium">{formData.phone}</p>
          )}
        </div>
      </div>

      {isEditing && (
        <div className="mt-4">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
