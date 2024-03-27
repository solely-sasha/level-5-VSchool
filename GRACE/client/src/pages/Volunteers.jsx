import { useEffect } from "react";

import { useVolunteerContext } from "../../context/VolunteerContext";

import VolunteerForm from "../components/VolunteerForm";
import VolunteerDetails from "../components/VolunteerDetails";

export default function Volunteers() {
  const { volunteers, updateVolunteers } = useVolunteerContext();

  useEffect(() => {
    const fetchVolunteers = async () => {
      const response = await fetch("/api/volunteers");
      const json = await response.json();

      if (response.ok) {
        updateVolunteers(json);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div className="volunteers-container">
      <div className="volunteers">
        {volunteers &&
          volunteers.map((volunteer) => (
            <VolunteerDetails key={volunteer._id} volunteer={volunteer} />
          ))}
      </div>

      <div className="volunteer-form">
        <VolunteerForm />
      </div>
    </div>
  );
}
