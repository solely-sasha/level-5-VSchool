import { useEffect, useState, useContext } from "react";
import { PantryContext } from "../../context/PantryContext";

export default function PantryForm() {
  const { updatePantries } = useContext(PantryContext);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [schedule, setSchedule] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pantry = { name, location, street, zipcode, schedule };
    const response = await fetch("/api/pantry", {
      method: "POST",
      body: JSON.stringify(pantry),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      updatePantries(json);
      setName("");
      setLocation("");
      setSchedule("");
      setStreet("");
      setZipcode("");
    }
  };

  return (
    <div className="m-4">
      <h2>Please share a pantry here: </h2>
      <form className="pantry-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
        />

        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="city"
        />

        <input
          type="text"
          onChange={(e) => setStreet(e.target.value)}
          value={street}
          placeholder="street"
        />

        <input
          type="text"
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
          placeholder="zipcode"
        />
        <input
          type="textbox"
          onChange={(e) => setSchedule(e.target.value)}
          value={schedule}
          placeholder="what is the schedule?"
        />

        <button className="bg-slate-900 text-green-300/75">Add Pantry</button>
        {error && <div classNameName="error">{error}</div>}
      </form>
    </div>
  );
}
