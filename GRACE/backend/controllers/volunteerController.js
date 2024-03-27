const Volunteers = require("../models/volunteerModel");

// get all volunteers
const getVolunteers = async (req, res) => {
  const volunteers = await Volunteers.find({}).sort({ createdAt: -1 });
  return res.status(200).json(volunteers);
};

// get single volunteer
const getVolunteer = async (req, res) => {
  const { id } = req.params;
  const volunteer = await Volunteers.findById(id);
  if (!volunteer) {
    return res.status(404).json({ error: "volunteer not found" });
  }
  res.status(200).json(volunteer);
};

// create a volunteer
const createVolunteer = async (req, res) => {
  const { name, phone, location, availability, distance } = req.body;
  try {
    const volunteer = await Volunteers.create({
      name,
      phone,
      location,
      availability,
      distance,
    });
    return res.status(200).json(volunteer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// delete a volunteer
const deleteVolunteer = async (req, res) => {
  const { id } = req.params;
  const volunteer = await Volunteers.findOneAndDelete({ _id: id });
  if (!volunteer) {
    return res.status(404).json({ error: "volunteer doesn't exist" });
  }
  res.status(200).json(volunteer);
};

// udate a volunteer
const updateVolunteer = async (req, res) => {
  const { id } = req.params;
  const volunteer = await Volunteers.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!volunteer) {
    return res.status(404).json({ error: "volunteer doesn't exist" });
  }
  res.status(200).json(volunteer);
};

module.exports = {
  getVolunteers,
  getVolunteer,
  createVolunteer,
  deleteVolunteer,
  updateVolunteer,
};
