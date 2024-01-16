express = require("express");
accounts = require("../../accounts.js");
accountRouter = express.Router();
accountRouter.use(express.json());
accountController = require("./accounts.controllers.js");

accountRouter.get("/", accountController.getAccount);

accountRouter.post("/", accountController.createAccount);

accountRouter.delete("/:id", accountController.deleteAccount);

accountRouter.put("/:id", accountController.updateAccount);

module.exports = accountRouter;
