const { Router } = require("express");
const { GoodsController } = require("../controllers/Goods.controller");
const router = Router();

router.get("/", GoodsController.getGoods);
router.get("/:id", GoodsController.getGoodsID);
router.delete("/:id", GoodsController.deleteGoods);
router.post("/", GoodsController.addGoods);

module.exports = router;
