import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      updateUserProfile(name);
      reset();
      navigate(from, { replace: true });
    });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-gray-50">
      <h3 className="text-2xl font-bold uppercase">
        home <span className="text-green-500">booking</span>
      </h3>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Enter your full name"
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Enter your email"
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Create a password"
              className="mt-1 px-3 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
