import React, { useState, useEffect } from "react";
import "./App.css";
import BountyForm from "./components/BountyForm";
import BountyList from "./components/BountyList";
import axios from "axios";

function App() {
  const [bounties, setBounties] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    living: true,
    amount: "",
    type: "Sith",
  });

  function getBounties() {
    axios
      .get("/api/bounties")
      .then((res) => {
        setBounties(res.data);
      })
      .catch((err) => console.log(err));
  }

  function addBounty(newBounty) {
    axios.post("/api/bounties", newBounty).then((res) => {
      setBounties((prevBounties) => [...prevBounties, res.data]);
      setFormData({
        firstName: "",
        lastName: "",
        living: true,
        amount: "",
        type: "Sith",
      });
    });
  }

  function handleEdit(bountyId, updates) {
    axios
      .put(`/api/bounties/${bountyId}`, updates)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.map((bounty) =>
            bounty._id !== bountyId ? bounty : res.data
          )
        );
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(bountyId) {
    axios
      .delete(`/api/bounties/${bountyId}`)
      .then(() => {
        setBounties((prevBounties) =>
          prevBounties.filter((bounty) => bounty._id !== bountyId)
        );
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getBounties();
  }, []);
  console.log(bounties);

  return (
    <div >
      <div className= "bg-gray-900 ">
        <div className=" grid grid-cols-3 items-center justify-center">
          <BountyForm 
            formData={formData}
            addBounty={addBounty}
            onEdit={handleEdit}
          />
        </div>
        <div className="grid grid-cols-5 gap-2 m-3">
          {bounties.map((bounty) => (
            <BountyList
              bounty={bounty}
              onDelete={handleDelete}
              onEdit={handleEdit}
              key={bounty._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
