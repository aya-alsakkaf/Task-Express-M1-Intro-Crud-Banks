express = require("express");
router = require("./api/accounts/accounts.routes.js");

app = express();
// app.use(router);
app.use("/accounts", router);
const PORT = 8000;

// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Welcome to our server!");
// });

// app.get("/accounts", (req, res) => {
//   accounts.length = 0
//     ? res.status(404).json({ message: "No accounts found" })
//     : res.status(200).json({ message: accounts });
// });

// app.post("/accounts", (req, res) => {
//   const newID = accounts.length == 0 ? 1 : accounts[accounts.length - 1].id + 1;

//   const newAccount = {
//     id: newID,
//     username: req.body.username,
//     funds: req.body.funds,
//   };

//   accounts.push(newAccount);
//   return res.status(200).json({ message: "Account created" });
// });

// app.delete("/accounts/:id", (req, res) => {
//   const account = accounts.find((account) => account.id == req.params.id);
//   if (!account) {
//     return res.status(404).json({ message: "Account not found" });
//   } else {
//     const accountsFiltered = accounts.filter(
//       (account) => account.id != req.params.id
//     );
//     return res
//       .status(200)
//       .json({ message: "Account deleted", accountsFiltered });
//   }
// });

// app.put("/accounts/:id", (req, res) => {
//   const account = accounts.find((account) => account.id == req.params.id);
//   if (!account) {
//     return res.status(404).json({ message: "Account not found" });
//   } else {
//     account.username = req.body.username;
//     account.funds = req.body.funds;
//     return res.status(200).json({ message: "Account updated", account });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
