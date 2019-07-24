const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/${encodeURIComponent(
    process.env.WEATHER_API_KEY
  )}/${encodeURIComponent(lat)},${encodeURIComponent(
    long
  )}?exclude=minutely,hourly,daily,alerts&units=si`;

  request.get(url, (error, response) => {
    if (response.body !== '{"code":403,"error":"daily usage limit exceeded"}') {
      const parsed = JSON.parse(response.body);
      const { summary, icon, temperature } = parsed.currently;
      callback({ summary, icon, temperature });
    } else {
      callback("expired", "expired", "0");
    }
  });
};

module.exports = forecast;
