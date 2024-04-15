const env = "bfbc44981f610587796d590b60f841d7";

const changeTitle = (data) => {
  switch (data) {
    case "Incheon":
      return "인천";
    case "Seoul":
      return "서울";
    case "Gangwon-do":
      return "강원도";
    case "Gyeonggi-do":
      return "경기도";
    case "Cheongju-si":
      return "청주";
    case "Daejeon":
      return "대전";
    case "Daegu":
      return "대구";
    case "Pohang":
      return "포항";
    case "Busan":
      return "부산";
    case "Mokpo":
      return "목포";
    case "Jeju-do":
      return "제주";
  }
};

const renderDataInfo = (data) => {
  const info = document.querySelector(".info");
  info.innerText = "";
  const h3 = document.createElement("h3");
  const weather_temp = document.createElement("div");
  const temp = document.createElement("div");
  const temp_detail = document.createElement("div");
  const text = document.createElement("p");
  const percent = document.createElement("p");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const weather_wind = document.createElement("div");
  const windDeg = document.createElement("p");
  const windSpeed = document.createElement("p");

  weather_temp.className = "weather_temp";
  temp.className = "temp";
  temp_detail.className = "temp_detail";
  weather_wind.className = "weather_wind";

  h3.innerText = `${changeTitle(data.name)}`;
  img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  h1.innerText = `${data.main.temp}도`;
  text.innerText = data.weather[0].description;
  percent.innerText = `습도 ${data.main.humidity}%`;
  windDeg.innerText = `풍향 ${data.wind.deg}도`;
  windSpeed.innerText = `풍속 ${data.wind.speed}Km`;

  weather_wind.append(windDeg, windSpeed);
  temp_detail.append(text, percent);
  temp.append(img, h1);
  weather_temp.append(temp, temp_detail);

  info.append(h3, weather_temp, weather_wind);
};

const renderData = (data, it) => {
  const h4 = document.createElement("h4");
  const img = document.createElement("img");
  const p = document.createElement("p");

  h4.innerText = `${changeTitle(data.name)}`;
  img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  p.innerText = `${data.weather[0].description}`;
  it.append(h4, img, p);
};

const div = document.querySelectorAll(".ping");
div.forEach((it) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${it.id}&appid=${env}&lang=kr&units=metric`;
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      renderData(data, it);
      it.addEventListener("click", () => {
        div.forEach((it) => it.classList.remove("active"));
        it.classList.add("active");
        renderDataInfo(data);
      });
    });
});
