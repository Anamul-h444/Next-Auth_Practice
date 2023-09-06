"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login credentials:", credentials);
    // Add your login logic here
    const config = {
      method: "POST",
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch("/api/login", config);
    const json = await response.json();
    console.log(json.status);

    if (json["status"] === true) {
      router.replace("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-96 h-[320px] border-2 border-gray-400 rounded-md shadow-lg">
        <h1 className="text-gray-600 font-bold text-center pt-6">Login</h1>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex flex-col space-y-3">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="py-2 px-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
