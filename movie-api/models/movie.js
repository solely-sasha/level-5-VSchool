const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// movie blueprint

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "please enter a title"],
  },
  genre: {
    type: String,
    enum: ["action", "drama", "fantasy", "horror", "comedy"],
    required: [true, "plase enter a genre"],
  },
  releaseYear: Number,
});

module.exports = mongoose.model("Movie", movieSchema);
