const cityInput = document.getElementById('cityInput')
const searchBtn = document.getElementById('searchBtn')
const weather = document.getElementById('weather')

function getWetherByCity(city){
    //&aqi=no - не отправлять доп информацию
    fetch(`https://api.weatherapi.com/v1/current.json?key=075045bbad254b9fb5764120251611&q=${city}&aqi=no`)
    
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {


        if (data.error) {
                weather.innerText = "Город не найден ❌";
                cityInput.value = "";
                return;
            }

        let cityName = data.location.name
        let tempC = data.current.temp_c

        weather.innerText = 'Город ' + cityName + ', ' + tempC + ' °C'
        cityInput.value = ""
    })
    .catch(function(error){
        console.log(error)
    })
}
searchBtn.addEventListener('click', function(){
    let city = cityInput.value
    if (city === ''){
        return
    }
    getWetherByCity(city)
})
