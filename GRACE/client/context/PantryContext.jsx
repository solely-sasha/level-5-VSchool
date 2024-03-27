import React, { createContext, useContext, useState } from "react";

const PantryContext = createContext();

const PantryContextProvider = ({ children }) => {
  const [pantries, setPantries] = useState([]);

  const updatePantries = (newPantries) => {
    setPantries(prevPantries => [...prevPantries, newPantries]);
  };

  return (
    <PantryContext.Provider value={{ pantries, updatePantries, setPantries }}>
      {children}
    </PantryContext.Provider>
  );
};



export { PantryContextProvider, PantryContext };
