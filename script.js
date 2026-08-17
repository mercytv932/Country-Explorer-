const input = document.querySelector(".input");
const filters = document.querySelector(".filters");
const countryCards = document.querySelector(".country-cards");

const API_KEY = "key";
const BASE_URL = "https://api.restcountries.com/countries/v5";

fetch(BASE_URL, { headers: { Authorization: `Bearer ${API_KEY}` } })
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.className = "country-card";

      console.log(country);
    });
  });
