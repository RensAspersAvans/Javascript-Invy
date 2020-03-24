const appKey = "67b05ea55056c44a8b4c4e4ff21fd942";
const searchInput = document.getElementById("weather-search");
const temperature = document.getElementById("temperature");
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const humidity = document.getElementById("humidity");

export class WeatherAPI{

    constructor() {
    }

    CheckEnterPressed(event){
        if(event.key === "Enter"){
            this.FindWeatherDetails();
        }
    }

    FindWeatherDetails(){
        if(searchInput.value === ""){
            return;
        }
        else{
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + appKey;
            fetch(url)
                .then((resp) => resp.json())
                .then(function(data){
                    cityName.innerHTML = data.name;
                    weatherIcon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                    temperature.innerHTML = parseInt(data.main.temp - 273) + "°";
                    humidity.innerHTML = data.main.humidity + "%";
                })
        }
    }
}

