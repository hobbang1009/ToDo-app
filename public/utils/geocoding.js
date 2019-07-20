const request = require("request");
const forecast = require("../utils/forecast");

const geocoding = (location, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=${encodeURIComponent(process.env.GEO_ACCESS_TOKEN)}`;
  request.get(url, (error, response) => {
    const parsed = JSON.parse(response.body);
    const cityname = parsed.features[0].place_name;
    const lat = parsed.features[0].center[1];
    const long = parsed.features[0].center[0];
    callback({ cityname, lat, long });
  });
};

module.exports = geocoding;
