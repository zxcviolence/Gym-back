const { Router } = require("express");
const { vacationController } = require("../controllers/Vacations.controller");
const router = Router();

router.get("/", vacationController.getVacation);
router.post("/", vacationController.postVacation);
router.delete("/:id", vacationController.removeVacation);

module.exports = router;
