//variaveis

const apikey = "eafc3cce131b63000b6630c980bba435"

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")  
const tempElement = document.querySelector("#temperature span") 
const descElement = document.querySelector("#description") 
const weatherIconElement = document.querySelector("#weather-icon") 
const countryElement = document.querySelector("#country") 
const humidityElement = document.querySelector("#humidity")
const windElement = document.querySelector("#wind span") ;

//funções

const getWeatherData = async(city) => {
    const apiweatherURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;
    const res = await fetch(apiweatherURL)
    const data = await res.json()
    console.log(data)
    return data
}
const showWeatherdata = async (city) => {
    const data = await getWeatherData(city)
    cityElement.innerText = data.name === undefined ? 'Cidade não encontrada' : data.name;
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElement.innerText =`${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
}



//eventos

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault()
    const city = cityInput.value;
        showWeatherdata(city)
        console.log(city)
});


