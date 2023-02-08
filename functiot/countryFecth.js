const { getCountry } = require("./functiot.js");

function getCountryInformation(response, maa, firstTouch) {
  const countryInformationUrl = `https://restcountries.com/v3.1/name/${maa}`;

  fetch(countryInformationUrl)
    .then((res) => res.json())
    .then((data) => {
      let maanNimi, asukasluku, flagUrl, paakaupunki;

      let valuutta = [];
      let valuuttaSymbol = [];

      data.forEach((info) => {
        // get currencies infos
        const raha = info.currencies;

        // count how many currencies is inside raha variable
        const numberOfCurrencies = Object.keys(raha).length;

        // check if there is more than 1 currency
        if (numberOfCurrencies === 1) {
          valuutta = `${Object.values(raha).map(
            (currency) => `${currency.name} (${currency.symbol})`
          )}`;
        } else if (numberOfCurrencies > 1) {
          valuutta = Object.values(raha).map(
            (currency) => `${currency.name} (${currency.symbol})`
          );
        }

        // get country name
        maanNimi = info.name.common;
        asukasluku = info.population;
        flagUrl = info.flags.png;
        paakaupunki = info.capital;
      });

      getCountry(
        response,
        firstTouch,
        maanNimi,
        asukasluku,
        flagUrl,
        paakaupunki,
        valuutta
        // valuuttaSymbol
      );
    });
}

module.exports = {
  getCountryInformation,
};
