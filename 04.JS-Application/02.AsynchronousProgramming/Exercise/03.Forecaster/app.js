function attachEvents() {
    document.getElementById('submit').addEventListener('click', displayWeather);
};
attachEvents();

async function displayWeather() {
    const currentSection = document.querySelector('#current');
    const upcomingSection = document.querySelector('#upcoming');

    const symbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        // 'Degrees': '&#176'
    };

    const code = await getCode();

    const [current, upComing] = await Promise.all([
        getCurrent(code),
        getUpcoming(code)
    ]);

    currentSection.innerHTML = `<div class="label">Current conditions</div>
<div class="forecasts">
<span class="condition symbol">${symbols[current.forecast.condition]}</span>
<span class="condition">
<span class="forecast-data">${current.name}</span>
<span class="forecast-data">${current.forecast.low}${'&#176'}/${current.forecast.high}${'&#176'}</span>
<span class="forecast-data">${current.forecast.condition}</span>
</span>
</div>`;
    upcomingSection.innerHTML = `<div class="label">Three-day forecast</div>`;
    let upcomingDiv = document.createElement('div');
    upcomingDiv.class = "forecast-info";

    upComing.forecast.forEach(day => {
        let span = document.createElement('span');
        span.class = "upcoming";
        span.innerHTML = `<span class="condition symbol">${symbols[day.condition]}</span>
<span class="condition">
<span class="forecast-data">${day.low}${'&#176'}/${day.high}${'&#176'}</span>
<span class="forecast-data">${day.condition}</span>`;
        upcomingDiv.appendChild(span);
    });

    upcomingSection.appendChild(upcomingDiv);
};

async function getCode() {
    const forecastSection = document.getElementById('forecast');
    const currentSection = document.querySelector('#current');
    const upcomingSection = document.querySelector('#upcoming');
    currentSection.innerHTML = "";
    upcomingSection.innerHTML = "";

    forecastSection.style.display = "";
    currentSection.textContent = "Loading...";
    try {
        const url = fetch("http://localhost:3030/jsonstore/forecaster/locations");
        const response = await (url);
        const data = await response.json();
        let city = document.getElementById('location').value;

        const filtered = data.filter(obj => obj.name == city);
        if (filtered.length != 1 || response.status != 200) {
            throw new Error();
        };

        return filtered[0].code;
        
    } catch (error) {
        currentSection.textContent = "Error";
    };
};

async function getCurrent(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
};

async function getUpcoming(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
};