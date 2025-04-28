const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const ConnectToDb = require("./db/db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

ConnectToDb();

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Namstey!!!!");
});
app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
module.exports = app;
