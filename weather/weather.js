const request = require('request');

let apiKey = 'e7184227d007667ade2be30e9c85efc8'
let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
        json: true
    }, (error, response, body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather');
        }
    })
}

module.exports.getWeather = getWeather