const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pantrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    street: {
      type: String,
    },
    zipcode: {
      type: Number,
    },

    schedule: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pantry", pantrySchema);
