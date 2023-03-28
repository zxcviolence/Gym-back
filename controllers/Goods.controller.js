const Goods = require("../models/Goods.model");

module.exports.GoodsController = {
  getGoods: async (req, res) => {
    try {
      const goods = await Goods.find();

      return res.json(goods);
    } catch (error) {
      return res.status({ error: error.message });
    }
  },
  
  getGoodsID: async (req, res) => {
    try {
      const goods = await Goods.findById(req.params.id);
      res.json(goods);
    } catch (error) {
      return res.status({ error: error.message });
    }
  },

  addGoods: async (req, res) => {
    try {
      const goods = await Goods.create({
        name: req.body.name,
        brand: req.body.brand,
        image: req.body.image,
        price: req.body.price,
        subtitle: req.body.subtitle,
      });
      return res.json(goods);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  deleteGoods: async (req, res) => {
    const { id } = req.params;
    try {
      const goods = await Goods.findById(id);
      await goods.remove();
      return res.json("успешно удалено");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
