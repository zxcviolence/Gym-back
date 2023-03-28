const { Router } = require("express");
const { coachesController } = require("../controllers/Coaches.controller");

const router = Router();

router.get("/", coachesController.getCoach);
router.post("/coach", coachesController.addCoach);
router.delete('/coach/:id', coachesController.deleteCoach);
router.patch('/coaches/:id', coachesController.updateCoach);

module.exports = router;
