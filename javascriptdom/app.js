const image = document.querySelector("img");
const country = document.querySelector("#country");
const wind = document.querySelector("#wind");
const description = document.querySelector("#desc");
const coordinate = document.querySelector("#coord");
const temperature = document.querySelector("#temp");
const container = document.querySelector("#container");
const footer = document.querySelector("#footer");
const hero = document.querySelector("#hero");

const t0 = performance.now();
document
  .getElementById("locationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = document.getElementById("location").value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=4173844c6955c35ac8300bd9ce0131b3`
    ).then((result) => {
      result
        .json()
        .then((data) => {
          const icon = data.weather[0].icon;
          const iconurl =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
          image.setAttribute("src", iconurl);
          country.textContent = `Weather in ${data.name} ${data.sys.country}:`;
          description.textContent = `Description: ${data.weather[0].description}`;
          wind.textContent = `Wind: ${data.wind.deg}°C and ${data.wind.speed} km/h`;
          coordinate.textContent = `Coordinate: ${data.coord.lon} Longitude, ${data.coord.lat} Latitude`;
          coordinate.textContent = `Temperature: ${data.main.temp}`;
          container.classList.add("container-div");
          hero.classList.add("hero");
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  });

const t1 = performance.now() - t0;
footer.textContent = `Web Performance ${t1}`;
