const Form = require("../models/Form.model");

module.exports.formController = {
  getForm: async (req, res) => {
    try {
      const form = await Form.find();
      res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  postForm: async (req, res) => {
    const { name, phone, email, forWhichMassage } = req.body;
    try {
      const form = await Form.create({
        name,
        phone,
        email,
        forWhichMassage,
      });
      return res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  removeForm: async (req, res) => {
    try {
      await Form.findByIdAndRemove(req.params.id);
      return res.json("Удалено");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
