const request = require('request')

const map = (address, callback) => {
    const url1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoicnByYWthc2giLCJhIjoiY2tndnV0aHNnMDQxejJzcGZ4ZWc5c3RnaiJ9.biNKC_vL7truouKF8_Ts_A`
request({ url: url1, json: true }, (error, response) => {
    // console.log(response)
    if (error) {
        callback('unable to connect to map service ', undefined)
    } else if (response.body.features.length === 0) {
        callback('unable to find location please try correctly')
    } else {
        callback(undefined, {
            latitude: response.body.features[2].center[1],
            longitude: response.body.features[2].center[0],
            location:response.body.features[2].place_name
        })
    }
})
}

module.exports= map