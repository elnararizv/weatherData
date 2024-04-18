let obj = {
    baku: {
        dayofweek: {
            monday: {
                temp: { day: 22, night: 13 },
                wind: { speed: '28' },
                humidity: 3,
                weather: "windy"},
            tuesday: {
                temp: { day: 24, night: 16 },
                wind: { speed: '18' },
                humidity: 13,
                weather: "cloudy"},
            wednesday: {
                temp: { day: 26, night: 14 },
                wind: { speed: '55' },
                humidity: 15,
                weather: "windy"},
            thursday: {
                temp: { day: 26, night: 16 },
                wind: { speed: '39' },
                humidity: 9,
                weather: "windy"},
            friday: {
                temp: { day: 15, night: 8 },
                wind: { speed: '13' },
                humidity: 11,
                weather: "cloudy"},
            saturday: {
                temp: { day: 29, night: 15 },
                wind: { speed: '8' },
                humidity: 1,
                weather: "sunny"},
            sunday: {
                temp: { day: 26, night: 16 },
                wind: { speed: '7' },
                humidity: 1,
                weather: "sunny"}
            },
            locat: { city_name: 'Baku', country: "Azerbaijan", timezone: {shortN: 'AZ/Baku' } }
    },
    sumgayit: {
        dayofweek: {
            monday: {
                temp: { day: 22, night: 13 },
                wind: { speed: '38' },
                humidity: 3,
                weather: "windy"},
            tuesday: {
                temp: { day: 28, night: 16 },
                wind: { speed: '8' },
                humidity: 3,
                weather: "sunny"},
            wednesday: {
                temp: { day: 26, night: 10},
                wind: { speed: '5' },
                humidity: 7,
                weather: "sunny"},
            thursday: {
                temp: { day: 18, night: 9 },
                wind: { speed: '39' },
                humidity: 13,
                weather: "windy"},
            friday: {
                temp: { day: 15, night: 8 },
                wind: { speed: '16' },
                humidity: 18,
                weather: "cloudy"},
            saturday: {
                temp: { day: 33, night: 19 },
                wind: { speed: '4' },
                humidity: 1,
                weather: "sunny"},
            sunday: {
                temp: { day: 26, night: 16 },
                wind: { speed: '8' },
                humidity: 3,
                weather: "windy"}
            },
            locat: { city_name: 'Sumgayit', country: "Azerbaijan", timezone: {shortN: 'AZ/Sumgayit' } }
    },
    ganja: {
        dayofweek: {
            monday: {
                temp: { day: 28, night: 15 },
                wind: { speed: '8' },
                humidity: 3,
                weather: "sunny"},
            tuesday: {
                temp: { day: 20, night: 12 },
                wind: { speed: '25' },
                humidity: 12,
                weather: "windy"},
            wednesday: {
                temp: { day: 26, night: 14 },
                wind: { speed: '45' },
                humidity: 15,
                weather: "windy"},
            thursday: {
                temp: { day: 27, night: 16 },
                wind: { speed: '6' },
                humidity: 3,
                weather: "sunny"},
            friday: {
                temp: { day: 29, night: 17 },
                wind: { speed: '6' },
                humidity: 4,
                weather: "sunny"},
            saturday: {
                temp: { day: 29, night: 12 },
                wind: { speed: '7' },
                humidity: 2,
                weather: "sunny"},
            sunday: {
                temp: { day: 23, night: 12 },
                wind: { speed: '17' },
                humidity: 8,
                weather: "cloudy"}
            },
            locat: { city_name: 'Ganja', country: "Azerbaijan", timezone: {shortN: 'AZ/Ganja' } }
    },
}
let searchBtn = document.querySelector('.search-btn');
let weatherSection = document.querySelector('.weatherSec');
let input = document.querySelector('.inp');

searchBtn.addEventListener('click', function weatherFrcst() {
    let cityName = input.value.toLowerCase().trim();
    let cities = Object.values(obj);
    
    for (let i = 0; i < cities.length; i++) {
        if (cityName === cities[i].locat.city_name.toLowerCase()) {
            updateWeather(cities[i].dayofweek);
            return;
        }
    }
    weatherSection.innerHTML = `<div class="card-body"><p class="card-text h5">Wrong Input</p></div>`;
});

input.addEventListener('keydown', function(){
    weatherSection.innerHTML = " "
})

function updateWeather(weatherData) {
    let days = Object.keys(weatherData);
    days.forEach(function(day) {
        weatherSection.innerHTML += `
            <div class="card col-md-4 col-lg-3 col-xl-3 col-sm-5 col-xs-4 mx-1 my-2 " style="color: #4B515D; border-radius: 20px;">
                <div class="card-body py-2 ">
                    <div class="d-flex">
                        <h6 class="flex-grow-1">${day.toUpperCase()}</h6>
                    </div>
                    <div class="d-flex flex-column text-center my-2 ">
                        <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;">${weatherData[day].temp.day}°C</h6>
                        <h5 class="small" style="color: #868B94">${weatherData[day].weather}</h5>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="flex-grow-1" style="font-size: 1rem;">
                            <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">${weatherData[day].wind.speed} km/h</span></div>
                            <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">${weatherData[day].humidity}%</span></div>
                            <div><i class="fas fa-moon fa-fw" style="color: #868B94;"></i> <span class="ms-1">${weatherData[day].temp.night}°C</span></div>
                        </div>
                        <div>
                        <img src="./assets/images/${weatherData[day].weather}.png" width="80px" id="weatherimg">
                        </div>
                    </div>
                </div>
            </div>`; 
    });
    
}
