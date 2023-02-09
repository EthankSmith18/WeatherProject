
const current_con = document.querySelector("#current_con")
const current_humidity = document.querySelector("#current_humidity")
const forecast_zero = document.querySelector("#forecast_zero")
const forecast_one = document.querySelector("#forecast_one")
const forecast_two = document.querySelector("#forecast_two")

function findweather(){

    var zip = document.querySelector("#zip").value;


fetch("http://api.weatherapi.com/v1/forecast.json?key=222cdab6fd7941a18d5185305222012&q="+ zip + "&days=7")
    .then((response) => {
    return response.json()
})
.then((response) => {
    weather_data = response
    console.log(response)
    //--------------------------CURRENT CONDITIONS------------------------------
    current_con.innerHTML = weather_data.current.temp_f + "&#8457;"
    icon_current.src = weather_data.current.condition.icon
    // current_humidity.innerHTML = weather_data.current.humidity + "%"
    //-----------------------------TODAYS FORECAST----------------------------
    forecast_zero_temp_max.innerHTML = weather_data.forecast.forecastday[0].day.maxtemp_f + "&#8457;"
    forecast_zero_temp_min.innerHTML = weather_data.forecast.forecastday[0].day.mintemp_f + "&#8457;"
    icon_zero.src = weather_data.forecast.forecastday[0].day.condition.icon
    // forecast_zero_humidity.innerHTML = weather_data.forecast.forecastday[0].day.avghumidity+ "%"
    // forecast_zero_precip.innerHTML = weather_data.forecast.forecastday[0].day.avgdaily_chance_of_rain + "%"
    // forecast_zero_wind.innerHTML = weather_data.forecast.forecastday[0].day.maxwind_mph + "MPH"
    
    //--------------------------DAY ONE FORECAST------------------------------------------
    forecast_one_temp_max.innerHTML = weather_data.forecast.forecastday[1].day.maxtemp_f + "&#8457;"
    forecast_one_temp_min.innerHTML = weather_data.forecast.forecastday[1].day.mintemp_f + "&#8457;"
    icon_one.src = weather_data.forecast.forecastday[1].day.condition.icon
    //--------------------------DAY TWO FORECAST
    forecast_two_temp_max.innerHTML = weather_data.forecast.forecastday[2].day.maxtemp_f + "&#8457;"
    forecast_two_temp_min.innerHTML = weather_data.forecast.forecastday[2].day.mintemp_f + "&#8457;"
    icon_two.src = weather_data.forecast.forecastday[2].day.condition.icon


    
})

.catch(err =>{
    console.log("There was a problem with the fetch.");
    console.log(err);
})

}


// fetch("http://api.weatherapi.com/v1/current.json?key=222cdab6fd7941a18d5185305222012&q=85705")
//     .then((response) => {
//     return response.json()
// })


// .then((data) => {
//     weather_info = data.current
//     console.log(data)
//     weather_div.innerHTML += weather_info.temp_c + "&#8451;"
// })

// weather_info.forecastday[0].day.avgtemp_c 

// fetch("http://api.weatherapi.com/v1/forecast.json?key=222cdab6fd7941a18d5185305222012&q="+ zip + "&days=7")
//     .then((response) => {
//     return response.json()
// })

// .then((data) => {
//     weather_info = data.forecast
//     console.log(data)
//     weather_div.innerHTML += weather_info.forecastday[0].day.avgtemp_c + "&#8451;" + weather_info.forecastday[1].day.avgtemp_c + " &#8451;" + weather_info.forecastday[2].day.avgtemp_c + " &#8451;"
// })

// fetch("http://api.weatherapi.com/v1/current.json?key=222cdab6fd7941a18d5185305222012&q="+zip)
//     .then((response) => {
//     return response.json()
// })

// weather_div.innerHTML = weather_info.current.temp_c + "&#8457;"
// weather_icon.src = weather_info.current.condition.icon