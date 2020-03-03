const appKey = "67b05ea55056c44a8b4c4e4ff21fd942";

let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("weather-search");
let temperature = document.getElementById("temperature");
let cityName = document.getElementById("city-name");
let weatherIcon = document.getElementById("weather-icon");
let humidity = document.getElementById("humidity");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", checkEnterPressed)

function checkEnterPressed(event){
    if(event.key === "Enter"){
        findWeatherDetails();
    }
}

function findWeatherDetails(){
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