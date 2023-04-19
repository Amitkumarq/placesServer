const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title name must be provided"],
  },
  description: {
    type: String,
    required: [true, "description must be provided"],
  },

  location: {
    lat: {
      type: String,
    },
    lng: {
      type: String,
    },
  },
  address: {
    type: String,
    required: [true, "address must be provided"],
  },
  creator: {
    type: String,
    required: [true, "creator name must be provided"],
  },
});

module.exports = mongoose.model("Place", placeSchema);
