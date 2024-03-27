const FoodPantry = require("../models/pantryModel");

// get all pantries
const getPantries = async (req, res) => {
  const pantries = await FoodPantry.find({}).sort({ createdAt: -1 });
  return res.status(200).json(pantries);
};

// get single pantry
const getPantry = async (req, res) => {
  const { id } = req.params;
  const pantry = await FoodPantry.findById(id);
  if (!pantry) {
    return res.status(404).json({ error: "pantry not found" });
  }
  res.status(200).json(pantry);
};

// search by city

const searchPantriesByCity = async (req, res) => {
  try {
    const { city } = req.query;

    const pantries = await FoodPantry.find({
      location: { $eq: city },
    });

    return res.status(200).json(pantries);
  } catch (error) {
    console.error("Error searching pantries by city:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// create a pantry
const createPantry = async (req, res) => {
  try {
    // console.log(req.body);
    const newPantry = new FoodPantry(req.body);
    const savedPantry = await newPantry.save();
    return res.status(200).send(savedPantry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// delete a pantry
const deletePantry = async (req, res) => {
  const { id } = req.params;
  const pantry = await FoodPantry.findOneAndDelete({ _id: id });
  if (!pantry) {
    return res.status(404).json({ error: "pantry doesn't exist" });
  }
  res.status(200).json(pantry);
};

// udate a pantry
const updatePantry = async (req, res) => {
  const { id } = req.params;
  const pantry = await FoodPantry.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!pantry) {
    return res.status(404).json({ error: "pantry doesn't exist" });
  }
  res.status(200).json(pantry);
};

module.exports = {
  getPantries,
  getPantry,
  createPantry,
  deletePantry,
  updatePantry,
  searchPantriesByCity,
};
