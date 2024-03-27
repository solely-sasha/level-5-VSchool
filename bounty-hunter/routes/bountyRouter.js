const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    firstName: "Marneg",
    lastName: "Folstock",
    living: true,
    amount: 100,
    type: "Jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Tarenth",
    lastName: "Vortex",
    living: false,
    amount: 200,
    type: "Sith",
    _id: uuidv4(),
  },
  {
    firstName: "Zethara",
    lastName: "Arvax",
    living: true,
    amount: 300,
    type: "Sith",
    _id: uuidv4(),
  },
];

bountyRouter.get("/", (req, res) => {
  res.send(bounties);
});

bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);

  res.send(`successfully added ${newBounty.firstName} to the database`);
});

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  const deletedBounty = bounties.splice(bountyIndex, 1);

  res.send(
    `${deletedBounty[0].firstName} ${deletedBounty[0].lastName} is dead`
  );
});

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const update = req.body;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  const updatedBounty = Object.assign(bounties[bountyIndex], update);
  res.send(updatedBounty);
  console.log("bounty updated");
});

module.exports = bountyRouter;
