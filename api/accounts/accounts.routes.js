express = require("express");
accounts = require("../../accounts.js");
accountRouter = express.Router();
accountRouter.use(express.json());
accountController = require("./accounts.controllers.js");

const {
  getAccount,
  createAccount,
  updateAccount,
  getAccountById,
  deleteAccount,
} = require("./accountsDB.controller.js");

accountRouter.get("/", getAccount);

accountRouter.get("/:_id", getAccountById);

accountRouter.post("/", createAccount);

accountRouter.put("/:_id", updateAccount);

accountRouter.delete("/:_id", deleteAccount);

module.exports = accountRouter;
