const Massage = require("../models/Massage.model");

module.exports.massageController = {
  postMassage: async (req, res) => {
    const { name, description, price, image } = req.body;
    try {
      const massage = await Massage.create({
        name,
        description,
        price,
        image,
      });
      return res.status(201).json(massage);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  getMassage: async (req, res) => {
    try {
      const massage = await Massage.find();
      return res.status(200).json(massage);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  removeMassage: async (req, res) => {
    try {
      await Massage.findByIdAndRemove(req.params.id);
      return res.status(201).json("Удалено");
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  patchMassage: async (req, res) => {
    try {
      const massage = await Massage.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
        },
        { new: true }
      );
      return res.json(`Изменено на ${massage.name}`);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
