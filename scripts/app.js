const form = document.querySelector(".change_location");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector(".time");
const icon = document.querySelector(".icon img")

const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weatherData = data.weatherDetails;
    const iconData = weatherData.WeatherIcon;
    const path_to_icon = `Weather-WebApp/icons/${iconData}.svg`;
    const isDayTime = weatherData.IsDayTime;


    details.innerHTML = 
    `
    <h5 class="my-3">${cityDetails.LocalizedName}</h5>
    <div class="my-3">${weatherData.WeatherText}</div>
    <div class="display-4 my-4">
        <span class="span_temp">${weatherData.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `
    icon.src = path_to_icon;
    if(isDayTime) {
        time.src = "Weather-WebApp/Images/day.svg";
    }
    else {
        time.src = "Weather-WebApp/Images/night.svg";
    }

    if(card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

    console.log(cityDetails, weatherData);
};

const updateCity = async (cityName) => {
    const cityDetails = await getCity(cityName); // getting all city details from the getCity func
    // defined in forecast.js

    const weatherDetails = await getWeather(cityDetails.Key); // getting all weather info from the city key
    // we are getting from cityDetails json


    // console.log(weatherDetails.Temperature.Metric.Value);

    // now we will return an object
    return {
        cityDetails: cityDetails,
        weatherDetails: weatherDetails
    };


};
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // here data stores the city name we insert in the input box
    const data = document.querySelector(".input_location").value.trim();
    // console.log(data);

    updateCity(data).then((detailsObject) => {
        updateUI(detailsObject);
    }).catch((err) => {
        console.log("Error");
    });
})
