const Coach = require("../models/Coach.model");

module.exports.coachesController = {
  getCoach: async (req, res) => {
    try {
      const coach = await Coach.find();
      res.json(coach);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  addCoach: async (req, res) => {
    const { image, name, description } = req.body;
    try {
      const coach = await Coach.create({
        image,
        name,
        description,
      });
      return res.json(coach);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  deleteCoach: async (req, res) => {
    try {
      await Coach.findByIdAndRemove(req.params.id);
      return res.json("Удалено!");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  updateCoach: async (req, res) => {
    try {
      const coach = await Coach.findByIdAndUpdate(
        req.params.id,
        {
          image: req.body.image,
          name: req.body.name,
          description: req.body.description,
        },
        {
          new: true,
        }
      );
      return res.json(coach);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
