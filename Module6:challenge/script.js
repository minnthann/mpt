$(document).ready(function () {
    const apiKey = 'c0a7297a832bcc280093685d6f735a34';
    const historyList = $('#history');
    const cityInput = $('#city-input');
    const searchBtn = $('#search-btn');
    const currentWeatherEl = $('#current-weather');
    const forecastEl = $('#forecast');
  
    // Function to display current weather
    const displayCurrentWeather = (city, data) => {
      const weatherIcon = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
      const uvClass = data.current.uvi < 3 ? 'uv-favorable' : data.current.uvi < 6 ? 'uv-moderate' : 'uv-severe';
  
      currentWeatherEl.html(`
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">${city} (${moment().format('L')}) <img src="${weatherIcon}" class="weather-icon"></h3>
            <p class="card-text">Temperature: ${data.current.temp}°F</p>
            <p class="card-text">Humidity: ${data.current.humidity}%</p>
            <p class="card-text">Wind Speed: ${data.current.wind_speed} MPH</p>
            <p class="card-text">UV Index: <span class="${uvClass}">${data.current.uvi}</span></p>
          </div>
        </div>
      `);
    };
  
    // Function to display 5-day forecast
    const displayForecast = (data) => {
      forecastEl.empty();
      for (let i = 1; i < 6; i++) {
        const forecast = data.daily[i];
        const weatherIcon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        const date = moment.unix(forecast.dt).format('L');
  
        forecastEl.append(`
          <div class="col-md-2">
            <div class="card">
              <div class="card-body text-center">
                <h5>${date}</h5>
                <img src="${weatherIcon}" class="weather-icon">
                <p>Temp: ${forecast.temp.day}°F</p>
                <p>Wind: ${forecast.wind_speed} MPH</p>
                <p>Humidity: ${forecast.humidity}%</p>
              </div>
            </div>
          </div>
        `);
      }
    };
  
    // Function to get weather data
    const getWeather = (city) => {
      const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
      $.getJSON(geoUrl, function (geoData) {
        const { lat, lon } = geoData.coord;
        const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  
        $.getJSON(weatherUrl, function (weatherData) {
          displayCurrentWeather(city, weatherData);
          displayForecast(weatherData);
        });
      });
    };
  
    // Function to load search history from localStorage
    const loadHistory = () => {
      const history = JSON.parse(localStorage.getItem('history')) || [];
      historyList.empty();
  
      history.forEach(city => {
        historyList.append(`<li class="list-group-item">${city}</li>`);
      });
  
      $('.list-group-item').on('click', function () {
        const city = $(this).text();
        getWeather(city);
      });
    };
  
    // Function to add city to search history
    const addToHistory = (city) => {
      let history = JSON.parse(localStorage.getItem('history')) || [];
  
      if (!history.includes(city)) {
        history.push(city);
        localStorage.setItem('history', JSON.stringify(history));
        loadHistory();
      }
    };
  
    // Event handler for search button
    searchBtn.on('click', function () {
      const city = cityInput.val().trim();
  
      if (city) {
        getWeather(city);
        addToHistory(city);
        cityInput.val('');
      }
    });
  
    // Load search history on page load
    loadHistory();
  });
  