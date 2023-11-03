require("dotenv").config({ path: "./config/.env" });
require("./config/bd");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port;
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});
app.get("/auth/login", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});
app.get("/auth/register", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});
app.listen(port, () => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});
