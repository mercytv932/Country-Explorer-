const input = document.querySelector(".input");
const filters = document.querySelector(".filters");
const countryCards = document.querySelector(".country-cards");

const BASE_URL = "https://api.restcountries.com/countries/v5";

fetch(BASE_URL, { headers: { Authorization: `Bearer ${API_KEY}` } })
  .then((response) => response.json())
  .then((data) => {
    data.data.objects.forEach((countr) => {
      const countryCard = document.createElement("div");
      countryCard.className = "country-card";
      const img = document.createElement("img");

      const info = document.createElement("div");
      const countryName = document.createElement("h3");
      const population = document.createElement("p");
      const region = document.createElement("p");
      const capital = document.createElement("p");

      info.appendChild(countryName);
      info.appendChild(population);
      info.appendChild(region);
      info.appendChild(capital);

      countryCard.appendChild(img);
      countryCard.appendChild(info);

      console.log(countr.names.common);
      console.log(countr.population);
      console.log(countr.region);
    });
    console.log(data);
  });
