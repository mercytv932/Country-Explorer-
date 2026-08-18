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
    });
}
