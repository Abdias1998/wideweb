require("dotenv").config({ path: "./config/.env" });
require("./config/bd");
const express = require("express");
const app = express();
const port = process.env.port;
app.listen(port, () => {
  console.log(`Le serveur est démarrer sur le port ${port}`);
});
