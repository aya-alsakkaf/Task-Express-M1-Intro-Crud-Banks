express = require("express");
accountRouter = require("./api/accounts/accounts.routes.js");

app = express();
app.use("/api/accounts", accountRouter);
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
