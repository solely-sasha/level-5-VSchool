import React, { useState } from "react";
import volunteerImage from "../assets/volunteers.jpg";

export default function VolunteerForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [distance, setDistance] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const volunteer = { name, phone, location, availability, distance };
    const response = await fetch("/api/volunteer", {
      method: "POST",
      body: JSON.stringify(volunteer),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setName("");
      setPhone("");
      setLocation("");
      setAvailability("");
      setDistance("");
    }
  };

  return (
    <div className="volunteer-page-container">
      <div className="volunteers-img-container">
        <img src={volunteerImage} className="volunteers-img" />
      </div>
      <div className="volunteer-page-middle">
        <h2>You can make a difference</h2>
        <p>
          signing up to volunteer takes a caring individual and the world needs
          more people like <span className="volunteer-span">you</span>
        </p>
      </div>
      <div className="volunteer-form-container">
        <h2 className="signup-h2">Volunteer Sign Up</h2>
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md signup-form"
        >
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label>Availability:</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />

          <label>Travel Distance:</label>
          <input
            type="text"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />

          <button
            type="submit"
            className="text-green-300/75 bg-slate-600 hover:bg-slate-600/75"
          >
            Sign Up as Volunteer
          </button>
          {error && <div classNameName="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
