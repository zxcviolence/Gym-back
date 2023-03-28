const mongoose = require("mongoose");

const coachFormSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  isSport: {
    type: String,
    required: true,
  },
});

const CoachForm = mongoose.model("CoachForm", coachFormSchema);

module.exports = CoachForm;
