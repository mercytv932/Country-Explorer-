const input = document.querySelector(".input");
const filters = document.querySelector(".filters");
const countryCards = document.querySelector(".country-cards");

const BASE_URL = "https://api.restcountries.com/countries/v5";

fetch(BASE_URL, { headers: { Authorization: `Bearer ${API_KEY}` } })
  .then((response) => response.json())
  .then((data) => {
    data.data.objects.forEach((countr) => {
      if (!countr.flag.url_png) {
        return;
      }
      const countryCard = document.createElement("div");
      countryCard.className = "country-card";
      const img = document.createElement("img");
      img.src = countr.flag.url_png;
      img.alt = `${countr.names.common} flag`;

      const info = document.createElement("div");
      const countryName = document.createElement("h3");
      countryName.textContent = countr.names.common;
      const population = document.createElement("p");
      population.textContent = `Population: ${countr.population.toLocaleString()}`;
      const region = document.createElement("p");
      region.textContent = `Region: ${countr.region}`;
      const capital = document.createElement("p");

      if (countr.capitals.length > 0) {
        capital.textContent = `Capital: ${countr.capitals[0].name}`;
      } else {
        capital.textContent = "No capital";
      }
      info.appendChild(countryName);
      info.appendChild(population);
      info.appendChild(region);
      info.appendChild(capital);

      countryCard.appendChild(img);
      countryCard.appendChild(info);
      countryCards.appendChild(countryCard);
      console.log(countr.names.common);
      console.log(countr.population);
      console.log(countr.region);
      console.log(countr.flag);
    });
    console.log(data);
  });
