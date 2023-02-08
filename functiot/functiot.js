// const { getCountryInformation } = require("./countryFecth.js");

function getCountry(
  response,
  maanNimi,
  asukasluku,
  flagUrl,
  paakaupunki,
  valuutta,
  symboli
) {
  // whole url data
  const url = "https://restcountries.com/v3.1/all";

  // fetch url
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // lisätään maat arrayn sisälle
      const maat = [];

      // get country information from getCountryInformation function
      const country = maanNimi;
      const population = asukasluku;
      const imageUrl = flagUrl;
      const capital = paakaupunki;
      const currency = valuutta;
      const currencySymbol = symboli;

      console.log(imageUrl);
      data.forEach((maa) => {
        // push values into maat array
        maat.push(maa.name.common);
      });
      response.render("index", {
        maat: maat,
        maa: country,
        asukasluku: population,
        flagUrl: imageUrl,
        paakaupunki: capital,
        valuutta: currency,
        symboli: currencySymbol,
      });
    })

    .catch((err) => console.log(err));
}

module.exports = {
  getCountry,
};
