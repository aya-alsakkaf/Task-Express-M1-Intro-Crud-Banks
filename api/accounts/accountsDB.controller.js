const Account = require("../../models/Account.js");

const getAccount = async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.status(200).json({ message: accounts });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const createAccount = async (req, res) => {
  try {
    const accounts = await Account.create(req.body);
    return res.status(201).json({ message: accounts });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const updateAccount = async (req, res) => {
  try {
    const _id = req.params._id;
    const account = await Account.findByIdAndUpdate(_id, req.body);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getAccountById = async (req, res) => {
  try {
    const _id = req.params._id;
    const account = await Account.findById(_id);
    return res.status(200).json({ message: account });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const _id = req.params._id;
    const account = await Account.findByIdAndDelete(_id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
module.exports = {
  getAccount,
  createAccount,
  updateAccount,
  getAccountById,
  deleteAccount,
};
