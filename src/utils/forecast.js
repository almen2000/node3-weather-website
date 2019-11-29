const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/46cc3b18fdb1b5fbb8106f396e27ed54/${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}?units=auto`

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to wheather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;