const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


// lat, lng, callback
let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`


axios.get(geocodeUrl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error ('Unable to find that address.')
    }
    debugger
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let apiKey = 'e7184227d007667ade2be30e9c85efc8'
    let weatherUrl =  `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`
    console.log(response.data.results[0].formatted_address)
    return axios.get(weatherUrl);
}).then((response)=>{
    let tempterature = response.data.currently.temperature
    let apparentTemperature = response.data.currently.apparentTemperature
    console.log(`It's currently ${tempterature}, it feels like ${apparentTemperature}`)
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers')
    } else {
        console.log(e.message)
    }
})