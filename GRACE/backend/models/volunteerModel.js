const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
    },
    availability: {
      type: String,
    },

    distance: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteers", volunteerSchema);
