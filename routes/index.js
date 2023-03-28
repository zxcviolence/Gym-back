const { Router } = require("express");

const router = Router();

router.use("/users", require("./Users.route"));
router.use("/goods", require("./Goods.route"));
router.use("/massage", require("./Massage.route"));
router.use("/coaches", require("./Coach.route"));
router.use("/simulators", require("./Simulators.route"));
router.use("/vacations", require("./Vacation.route"));
router.use("/admin/form", require("./Form.route"));
router.use("/admin/coachform", require("./CoachForm.route"));
router.use("/", require("./Subscription.route"))


module.exports = router;
