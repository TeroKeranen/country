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
  // make a variable to check if you just landed on page
  const firstTouch = false;
  // use getCountry function on index page
  getCountry(res, firstTouch);
});

app.post("/maa", (req, res) => {
  // make a variable to check if you just landed on page
  const firstTouch = true;
  // get selected country and store it in variable
  const maa = req.body.maanNimi;

  getCountryInformation(res, maa, firstTouch);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log(`server started on port ${port}`);
});
