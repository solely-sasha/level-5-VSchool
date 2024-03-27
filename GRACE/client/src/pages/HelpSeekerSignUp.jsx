import React, { useState } from "react";

export default function HelpSeekerSignup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const helpSeekerData = { name, phone, location };
    console.log("Help Seeker Data:", helpSeekerData);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Our caring volunteers would love to help you!
        </h2>
        <h2 className="text-lg text-center mb-8">
          Sign up to get the help you need
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block">
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="form-input mt-1 block w-full"
            />
          </label>
          <label className="block">
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="form-input mt-1 block w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
