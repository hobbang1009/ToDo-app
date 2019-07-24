const express = require("express");
const { homeAuth } = require("../middlewares/midAuth");
const forecast = require("../public/utils/forecast");
const geocoding = require("../public/utils/geocoding");
const Todo = require("../models/todo");

const router = express.Router();

router.get("/", homeAuth, async (req, res) => {
  if (req.user) {
    const totalP = await Todo.find({ author: req.user._id });
    const totalPage = Math.ceil(totalP.length / 7);
    const pageCount = parseInt(req.query.page) || 0;
    const limitCount = 7;
    const todos = await Todo.find({ author: req.user._id })
      .limit(limitCount)
      .skip(limitCount * pageCount)
      .sort({ createdAt: -1 });
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
            todos,
            pageCount,
            totalPage
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
            todos,
            pageCount,
            totalPage
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
