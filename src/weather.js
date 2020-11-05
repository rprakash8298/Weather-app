const request = require('request')

const weather = (addr1, addr2, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${addr1}&lon=${addr2}&exclude=minutely,hourly,daily&appid=5581dca845cf514d056744636478e99e&units=metric`
    request({ url: url, json: true }, (error, response) => {
        // console.log(response.body)
        if (error) {
             callback('unable to connect to weather service', undefined)
        } else if (response.body.current.error) {
            callback('unabel to find location try another',undefined)
        } else {
            callback(undefined, {
                time:response.body.timezone,
                temperature: response.body.current.temp,
                feelLike: response.body.current.feels_like,
                humid: response.body.current.humidity,
                uvIndex: response.body.current.uvi,
                visisble: response.body.current.visibility,
                dew: response.body.current.dew_point,
                winSpeed: response.body.current.wind_speed,
                pressure: response.body.current.pressure,
                sky: response.body.current.weather[0].description
            })
         }

        }) 
}
module.exports = weather
