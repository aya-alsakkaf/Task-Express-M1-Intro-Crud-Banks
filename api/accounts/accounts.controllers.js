accounts = require("../../accounts.js");
const getAccount = (req, res) => {
  console.log("here");
  accounts.length = 0
    ? res.status(404).json({ message: "No accounts found" })
    : res.status(200).json({ message: accounts });
};

const createAccount = (req, res) => {
  const newID = accounts.length == 0 ? 1 : accounts[accounts.length - 1].id + 1;

  const newAccount = {
    id: newID,
    username: req.body.username,
    funds: req.body.funds,
  };

  accounts.push(newAccount);
  return res.status(200).json({ message: "Account created" });
};

const deleteAccount = (req, res) => {
  const account = accounts.find((account) => account.id == req.params.id);
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  } else {
    const accountsFiltered = accounts.filter(
      (account) => account.id != req.params.id
    );
    return res
      .status(200)
      .json({ message: "Account deleted", accountsFiltered });
  }
};
const updateAccount = (req, res) => {
  const account = accounts.find((account) => account.id == req.params.id);
  if (!account) {
    return res.status(404).json({ message: "Account not found" });
  } else {
    account.username = req.body.username ? req.body.username : account.username;
    account.funds = req.body.funds ? req.body.funds : account.funds;
    return res.status(200).json({ message: "Account updated", account });
  }
};
module.exports = {
  getAccount,
  createAccount,
  deleteAccount,
  updateAccount,
};
