const weatherApiKey = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'; // Replace with your OpenWeather API key
const newsApiKey = 'c0a7297a832bcc280093685d6f735a34'; // Replace with your NewsAPI key

document.getElementById('searchButton').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        const weatherData = await fetchWeather(city);
        displayWeather(weatherData);
        const newsData = await fetchNews(city);
        displayNews(newsData);
    }
});

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`);
    const data = await response.json();
    return data;
}

function displayWeather(data) {
    const weatherResults = document.getElementById('weatherResults');
    weatherResults.innerHTML = `
        <h4 class="title is-5">${data.name} (${data.sys.country})</h4>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
    `;
}

async function fetchNews(city) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${city}&apiKey=${newsApiKey}`);
    const data = await response.json();
    return data.articles;
}

function displayNews(articles) {
    const newsResults = document.getElementById('newsResults');
    newsResults.innerHTML = articles.slice(0, 5).map(article => `
        <div class="box">
            <h4 class="title is-5"><a href="${article.url}" target="_blank">${article.title}</a></h4>
            <p>${article.description}</p>
        </div>
    `).join('');
}

// Load persistent data and other initializations can go here
