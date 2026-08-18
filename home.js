const input = document.querySelector(".input");
const filters = document.querySelector(".filters");
const countryCards = document.querySelector(".country-cards");
const toggleDark = document.querySelector(".toggle-dark");

const BASE_URL = "https://api.restcountries.com/countries/v5";

let countriesData = [];
fetch(BASE_URL, { headers: { Authorization: `Bearer ${API_KEY}` } })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    countriesData = data.data.objects;
    displayCountries(countriesData);
  });

function displayCountries(listCountries) {
  countryCards.innerHTML = "";

  listCountries.forEach((country) => {
    if (!country.flag.url_png) {
      return;
    }
    const countryCard = document.createElement("div");
    countryCard.className = "country-card";
    countryCard.addEventListener("click", () => {
      console.log(country.names.common);
      window.location.href = `details.html?country=${country.names.common}`;
    });
    const img = document.createElement("img");
    img.classList.add("click-img");

    img.src = country.flag.url_png;
    img.alt = `${country.names.common} flag`;

    const info = document.createElement("div");
    const countryName = document.createElement("h3");
    countryName.textContent = country.names.common;
    const population = document.createElement("p");
    population.textContent = `Population: ${country.population.toLocaleString()}`;
    const region = document.createElement("p");
    region.textContent = `Region: ${country.region}`;
    const capital = document.createElement("p");

    if (country.capitals.length > 0) {
      capital.textContent = `Capital: ${country.capitals[0].name}`;
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
  });
}

input.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filteredCountries = countriesData.filter((country) => {
    return country.names.common.toLowerCase().includes(searchTerm);
  });
  displayCountries(filteredCountries);
});

filters.addEventListener("change", () => {
  const selectedRegion = filters.value;
  if (selectedRegion === "all") {
    displayCountries(countriesData);
  } else {
    const filtered = countriesData.filter((country) => {
      return country.region.toLowerCase() === selectedRegion.toLowerCase();
    });
    displayCountries(filtered);
  }
});

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
