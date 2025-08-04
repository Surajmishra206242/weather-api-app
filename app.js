const apiKey = "f6aec664ce85b8650e04b01b926616f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function cheackWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png";
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    cheackWeather(searchBox.value);
})

const toggleButton = document.getElementById("toggle-style-btn");
const contentBackground = document.getElementById("content-background");

let stylesRemoved = false;

toggleButton.addEventListener("click", () => {
    if (!stylesRemoved) {
        removeStyles(contentBackground);
        stylesRemoved = true;
        toggleButton.textContent = "Restore Styles";
    } else {
        location.reload();
    }
});

function removeStyles(element) {
    element.removeAttribute("style");
    element.className = "";

    const allChildren = element.querySelectorAll("*");
    allChildren.forEach(child => {
        child.removeAttribute("style");
        child.className = "";
    });
}
