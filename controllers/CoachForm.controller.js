const CoachForm = require("../models/CoachForm.model");

module.exports.coachFormController = {
  getForm: async (req, res) => {
    try {
      const form = await CoachForm.find();
      res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  postForm: async (req, res) => {
    const { name, phone, weight, isSport } = req.body;
    try {
      const form = await CoachForm.create({
        name,
        phone,
        weight,
        isSport,
      });
      return res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  removeForm: async (req, res) => {
    try {
      await CoachForm.findByIdAndRemove(req.params.id);
      return res.json("Удалено");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
