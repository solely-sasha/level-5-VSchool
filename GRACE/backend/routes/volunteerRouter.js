const express = require("express");
const volunteerRouter = express.Router();
const {
  getVolunteers,
  getVolunteer,
  createVolunteer,
  deleteVolunteer,
  updateVolunteer,
} = require("../controllers/volunteerController");

// get all pantries
volunteerRouter.get("/volunteers", getVolunteers);

// get one volunteer
volunteerRouter.get("/volunteer/:id", getVolunteer);

// create a volunteer
volunteerRouter.post("/volunteer", createVolunteer);

// delete a volunteer
volunteerRouter.delete("/volunteer/:id", deleteVolunteer);

// update a volunteer
volunteerRouter.put("/volunteer/:id", updateVolunteer);

module.exports = volunteerRouter;
