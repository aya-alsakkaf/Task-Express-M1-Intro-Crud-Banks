express = require("express");
accounts = require("../../accounts.js");
router = express.Router();
router.use(express.json());
controller = require("./accounts.controllers.js");

router.get("/", controller.getAccount);

router.post("/", controller.createAccount);

router.delete("/:id", controller.deleteAccount);

router.put("/:id", controller.updateAccount);

module.exports = router;
