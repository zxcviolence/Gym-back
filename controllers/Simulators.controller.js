const Simulator = require("../models/Simulator.model");

module.exports.simulatorsController = {
  getSimulator: async (req, res) => {
    try {
      const simulator = await Simulator.find();
      res.json(simulator);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  addSimulator: async (req, res) => {
    const { image, name } = req.body;
    try {
      const simulator = await Simulator.create({
        image,
        name,
      });
      return res.json(simulator);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  deleteSimulator: async (req, res) => {
    try {
      await Simulator.findByIdAndRemove(req.params.id);
      return res.json("Удалено!");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  updateSimulator: async (req, res) => {
    try {
      const simulator = await Simulator.findByIdAndUpdate(
        req.params.id,
        {
          image: req.body.image,
          name: req.body.name,
        },
        {
          new: true,
        }
      );
      return res.json(simulator);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
