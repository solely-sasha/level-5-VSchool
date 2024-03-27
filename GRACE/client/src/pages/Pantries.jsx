import { useEffect, useState, useContext } from "react";

import { PantryContext } from "../../context/PantryContext";

import PantryForm from "../components/PantryForm";
import PantryDetails from "../components/PantryDetails";

export default function Pantries() {
  const { pantries, setPantries } = useContext(PantryContext);

  useEffect(() => {
    const fetchPantries = async () => {
      const response = await fetch("/api/pantries");
      const json = await response.json();

      if (response.ok) {
        setPantries(json);
      }
    };

    fetchPantries();
  }, []);

  return (
    <div className="pantries-container">
      <div className="pantries">
        {pantries &&
          pantries.map((pantry) => (
            <PantryDetails key={pantry._id} pantry={pantry} />
          ))}
      </div>

      <div className="pantry-form">
        <PantryForm />
      </div>
    </div>
  );
}
