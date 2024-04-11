const env = "bfbc44981f610587796d590b60f841d7";

const getCurrentWeather = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lank=Kr&units=metric&appid=${env}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const h4 = document.createElement("h4");
      const img = document.createElement("img");
      const p = document.createElement("p");

      h4.innerText = `${data.name}`;
      p.innerText = `${data.weather[0].main}`;
    });
};

const div = document.querySelector(".seoul");
console.log(div);
const city = "seoul";

getCurrentWeather(city);
