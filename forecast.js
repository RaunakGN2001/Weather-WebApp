const key = 'IvL1hlPnFSVrBEGiTQKjAY3Jql7C0l6I';
// const cityVal = document.querySelector(".location_input").value;

// get weather info
const getWeather = async (id) => {
    const base = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}


// get city info 
const getCity = async (city) => {
    const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    // console.log(data[0]);

    return data[0]; // returns a promise
};

