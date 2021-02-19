const express = require("express");

const PORT = 4001;
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Started listening on port ${PORT}`);
});
