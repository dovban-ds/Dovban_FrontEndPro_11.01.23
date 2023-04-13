const weatherCase = document.querySelector(".weather-case");

function doForecast(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
  )
    .then((response) => response.json())
    .then((info) => {
      const HTML = `
        <div class='div-style'>
        <img src="https://openweathermap.org/img/w/${info.weather[0].icon}.png" alt="weather picture" style ="align-self: center; margin: 8px 0">
        <p>City: ${info.name}</p>
        <p style = 'margin: 8px 0'>Temperature: ${info.main.temp} ℃</p>
        <p>Pressure: ${info.main.pressure} mm</p>
        <p style = 'margin: 8px 0'>Humidity: ${info.main.humidity} %</p>
        <p>Wind speed: ${info.wind.speed} km/h</p>
        <p style = 'margin: 8px 0'>Degree: ${info.wind.deg} °</p>
        </div>
        `;
      weatherCase.innerHTML += HTML;
    });
}

doForecast("LVIV");
doForecast("DNIPRO");
doForecast("KYIV");
doForecast("KHARKIV");
doForecast("KHERSON");
