const { Router } = require("express");
const { massageController } = require("../controllers/Massage.controller");

const router = Router();

router.get("/", massageController.getMassage);
router.post("/", massageController.postMassage);
router.patch("/admin/:id", massageController.patchMassage);
router.delete("/admin/:id", massageController.removeMassage);

module.exports = router;
