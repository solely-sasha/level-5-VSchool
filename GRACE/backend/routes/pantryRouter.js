const express = require("express");
const pantryRouter = express.Router();
const {
  getPantries,
  getPantry,
  createPantry,
  deletePantry,
  updatePantry,
  searchPantriesByCity,
} = require("../controllers/pantryController");

// get all pantries
pantryRouter.get("/pantries", getPantries);

// get one pantry
pantryRouter.get("/pantry/:id", getPantry);

// search by city

pantryRouter.get("/pantries/search", searchPantriesByCity);

// create a pantry
pantryRouter.post("/pantry", createPantry);

// delete a pantry
pantryRouter.delete("/pantry/:id", deletePantry);

// update a pantry
pantryRouter.put("/pantry/:id", updatePantry);

module.exports = pantryRouter;
