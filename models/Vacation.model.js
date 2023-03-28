const mongoose = require("mongoose");

const vacationSchema = mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  number: {
    type: Number,
  },
  message: {
    type: String,
  },
  job: {
    type: String,
  },
});

const Vacation = mongoose.model("Vacations", vacationSchema);

module.exports = Vacation;
