// require express
const express = require("express");
const dotenv = require("dotenv").config();

// require getCountry function
const { getCountry } = require("./functiot/functiot.js");

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
  const countryInformationUrl = `https://restcountries.com/v3.1/name/${maa}`;

  fetch(countryInformationUrl)
    .then((res) => res.json())
    .then((data) => {
      let maanNimi, asukasluku, flagUrl, paakaupunki;

      data.forEach((info) => {
        // get currencies infos
        const raha = info.currencies;
        // take currencies currency code and store it into variable
        const valuuttaKoodi = Object.keys(raha);
        // get valuutta data from raha object
        let valuuttaData = raha[valuuttaKoodi];

        const valuutta = valuuttaData.name;
        const valuuttaSymbol = valuuttaData.symbol;

        // get country name
        maanNimi = info.name.common;
        asukasluku = info.population;
        flagUrl = info.flags.png;
        paakaupunki = info.capital;
      });
      res.render("index", {
        maat: "",
        maa: maanNimi,
        asukasluku: asukasluku,
        flagUrl: flagUrl,
        paakaupunki: paakaupunki,
      });
    });
});

app.listen(3000, function () {
  console.log("server start on port 3000");
});
