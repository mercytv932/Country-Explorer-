const countryImg = document.querySelector(".country-img");
const countryNameElement = document.querySelector(".country-name");
const countryPopulation = document.querySelector(".country-population");
const countryRegion = document.querySelector(".country-region");
const countrySubregion = document.querySelector(".country-subregion");
const countryCapital = document.querySelector(".country-capital");
const countryCurrency = document.querySelector(".country-currency");

const API_KEY = "rc_live_b009c411a6c94840b5a6e4df783aa746";

const BASE_URL = "https://api.restcountries.com/countries/v5";

const urlParams = new URLSearchParams(window.location.search);

const countryName = urlParams.get("country");

console.log("Selected country:", countryName);

if (countryName) {
  fetchCountryData(countryName);
} else {
  console.log("No country found in the URL");
}

function fetchCountryData(countryName) {
  fetch(BASE_URL, { headers: { Authorization: `Bearer ${API_KEY}` } })
    .then((response) => response.json())
    .then((data) => {
      const selectedCountry = data.data.objects.find((country) => {
        return country.names.common === countryName;
      });

      console.log(selectedCountry);

      countryNameElement.textContent = selectedCountry.names.common;
      countryImg.src = selectedCountry.flag.url_png;
      countryPopulation.textContent = `Population: ${selectedCountry.population.toLocaleString()}`;
      countryRegion.textContent = `Region: ${selectedCountry.region}`;
      countrySubregion.textContent = `Subregion: ${selectedCountry.subregion}`;
      countryCapital.textContent = `Capital: ${selectedCountry.capitals[0].name}`;
      countryCurrency.textContent = `Currency: ${selectedCountry.currencies[0].name}`;
    });
}
