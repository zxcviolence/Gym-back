const { Router } = require("express");
const { simulatorsController } = require("../controllers/Simulators.controller");

const router = Router();

router.get("/", simulatorsController.getSimulator);
router.post("/add", simulatorsController.addSimulator);
router.delete('/simulator/:id', simulatorsController.deleteSimulator);
router.patch('/simulator/:id', simulatorsController.updateSimulator);

module.exports = router;
