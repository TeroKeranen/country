// require express
const express = require("express");
const dotenv = require("dotenv").config();

// require getCountry function
const { getCountry } = require("./functiot/functiot.js");
const { getCountryInformation } = require("./functiot/countryFecth.js");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  // use getCountry function on index page
  getCountry(res);
});

app.post("/maa", (req, res) => {
  // get selected country and store it in variable
  const maa = req.body.maanNimi;

  getCountryInformation(res, maa);
});

app.listen(3000, function () {
  console.log("server start on port 3000");
});
