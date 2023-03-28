const { formController } = require("../controllers/Form.controller");
const { Router } = require("express");
const router = Router();

router.get("/", formController.getForm);
router.post("/", formController.postForm);
router.delete("/:id", formController.removeForm);

module.exports = router;
