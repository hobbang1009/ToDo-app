const express = require("express");
const { homeAuth } = require("../middlewares/midAuth");
const forecast = require("../public/utils/forecast");
const geocoding = require("../public/utils/geocoding");
const User = require("../models/user");

const router = express.Router();

router.get("/", homeAuth, async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id).populate("todo");
    const todos = user.todo;

    if (req.query.Location !== undefined) {
      const userID = req.user._id;
      const location = req.query.Location;
      geocoding(location, value => {
        forecast(value.lat, value.long, forecastValue => {
          return res.render("loggedHome", {
            pageName: "ToDo-APP",
            location: value.cityname,
            query: req.query.Location,
            icon: forecastValue.icon,
            temperature: Math.floor(forecastValue.temperature),
            userID,
            userAvatar: req.user.avatar,
            todos
          });
        });
      });
    } else {
      const userID = req.user._id;
      const location = "seoul";
      geocoding(location, value => {
        forecast(value.lat, value.long, forecastValue => {
          return res.render("loggedHome", {
            pageName: "ToDo-APP",
            location: value.cityname,
            query: req.query.Location,
            icon: forecastValue.icon,
            temperature: Math.floor(forecastValue.temperature),
            userID,
            userAvatar: req.user.avatar,
            todos
          });
        });
      });
    }
  } else {
    if (req.query.Location !== undefined) {
      const location = req.query.Location;
      geocoding(location, value => {
        forecast(value.lat, value.long, forecastValue => {
          res.render("home", {
            pageName: "ToDo-APP",
            location: value.cityname,
            query: req.query.Location,
            icon: forecastValue.icon,
            temperature: Math.floor(forecastValue.temperature)
          });
        });
      });
    } else {
      const location = "seoul";
      geocoding(location, value => {
        forecast(value.lat, value.long, forecastValue => {
          res.render("home", {
            pageName: "ToDo-APP",
            location: value.cityname,
            query: req.query.Location,
            icon: forecastValue.icon,
            temperature: Math.floor(forecastValue.temperature)
          });
        });
      });
    }
  }
});

module.exports = router;
