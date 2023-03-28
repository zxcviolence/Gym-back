const { formController } = require("../controllers/form.controller");
const { Router } = require("express");
const router = Router();

router.get("/", formController.getForm);
router.post("/", formController.postForm);
router.delete("/:id", formController.removeForm);

module.exports = router;
