import React, { createContext, useContext, useState } from "react";

const VolunteerContext = createContext();

const VolunteerContextProvider = ({ children }) => {
  const [volunteers, setVolunteers] = useState([]);

  const updateVolunteers = (newVolunteers) => {
    setVolunteers(newVolunteers);
  };

  return (
    <VolunteerContext.Provider value={{ volunteers, updateVolunteers }}>
      {children}
    </VolunteerContext.Provider>
  );
};

const useVolunteerContext = () => {
  return useContext(VolunteerContext);
};

export { VolunteerContextProvider, useVolunteerContext };
