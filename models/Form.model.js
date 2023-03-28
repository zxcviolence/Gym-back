const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  forWhichMassage: {
    type: String,
    required: true,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
