const apiKey = 'bb79be6ab24b054b9f3c16af47e1c1a0';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`;
const weatherIcon = document.getElementById('weatherIcon');

async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        let data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C' ;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%' ;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    const weatherCondition = data.weather[0].main;
    switch (weatherCondition){
        case 'Clouds':
            weatherIcon.src = 'Images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src = 'Images/clear.png';
            break;
        case 'Mist':
            weatherIcon.src = 'Images/mist.png';
            break; 
        case 'Rain':
            weatherIcon.src = 'Images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'Images/drizzle.png';
            break;    
        case 'Snow':
            weatherIcon.src = 'Images/snow.png';
            break;
        default: weatherIcon.src = 'Images/clear.png';
    }
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }
}
let searchBtn = document.getElementById('searchBtn');
let inputField = document.getElementById('inputField');

inputField.addEventListener('keypress', () => {
    if (event.keyCode === 13){
        let city = inputField.value;
        if (city) checkWeather(city);
    }
});
searchBtn.addEventListener('click', () => {
    let city = inputField.value;
    if (city) checkWeather(city);
})