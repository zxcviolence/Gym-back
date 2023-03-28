const Vacation = require("../models/Vacation.model");

module.exports.vacationController = {
  getVacation: async (req, res) => {
    try {
      const Vacation = await Vacation.find();
      res.json(form);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  postVacation: async (req, res) => {
    const { name, surname, email, number, message, job } = req.body;
    try {
      const vacation = await Vacation.create({
        name,
        surname,
        email,
        number,
        message,
        job,
      });
      return res.json(vacation);
    } catch (error) {
      return res.json({ error: error });
    }
  },
  removeVacation: async (req, res) => {
    try {
      await Vacation.findByIdAndRemove(req.params.id);
      return res.json("Удалено");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
