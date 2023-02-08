function getCountry(response) {
  // whole url data
  const url = "https://restcountries.com/v3.1/all";

  // fetch url
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // lisätään maat arrayn sisälle
      const maat = [];

      data.forEach((maa) => {
        // push values into maat array
        maat.push(maa.name.common);
      });
      response.render("index", {
        maat: maat,
        maa: "",
        asukasluku: "",
        flagUrl: "",
        paakaupunki: "",
      });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  getCountry,
};
