const { getCountry } = require("./functiot.js");

function getCountryInformation(response, maa) {
  const countryInformationUrl = `https://restcountries.com/v3.1/name/${maa}`;

  fetch(countryInformationUrl)
    .then((res) => res.json())
    .then((data) => {
      let maanNimi, asukasluku, flagUrl, paakaupunki, valuutta, valuuttaSymbol;

      data.forEach((info) => {
        // get currencies infos
        const raha = info.currencies;
        // take currencies currency code and store it into variable
        const valuuttaKoodi = Object.keys(raha);
        // get valuutta data from raha object
        let valuuttaData = raha[valuuttaKoodi];

        valuutta = valuuttaData.name;
        valuuttaSymbol = valuuttaData.symbol;

        // get country name
        maanNimi = info.name.common;
        asukasluku = info.population;
        flagUrl = info.flags.png;
        paakaupunki = info.capital;
      });

      getCountry(
        response,
        maanNimi,
        asukasluku,
        flagUrl,
        paakaupunki,
        valuutta,
        valuuttaSymbol
      );
    });
}

module.exports = {
  getCountryInformation,
};
