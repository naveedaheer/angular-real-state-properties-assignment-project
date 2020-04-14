const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const db = require("./db");
const propertyRouter = require("./routes/property-router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", function (req, res) {
  res.send("working");
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", propertyRouter);


app.listen(8000, () => {
  console.log("listening on port 8000");
});
