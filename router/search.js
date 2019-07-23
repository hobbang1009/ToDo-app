const express = require("express");
const { midAuth } = require("../middlewares/midAuth");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/search", midAuth, async (req, res) => {
  try {
    const query = req.query.search;
    const searchedTodo = await Todo.find({
      author: req.user._id,
      todo: { $regex: req.query.search, $options: "i" }
    }).limit(20);

    const userID = req.user._id;
    res.render("search", {
      pageName: req.query.search,
      userID,
      userAvatar: req.user.avatar,
      searchedTodo,
      query
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/search", midAuth, async (req, res) => {
  try {
    const todoID = req.body.completed;
    const todo = await Todo.findById(todoID);
    if (todo.completed === true) {
      todo.completed = false;
      await todo.save();
    } else {
      todo.completed = true;
      await todo.save();
    }
    res.redirect(`/search?search=${req.query.search}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/search/update", midAuth, async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.body.id, { todo: req.body.content });

    res.redirect(`/search?search=${req.query.search}`);
  } catch (e) {
    res.status(e).send(e);
  }
});

router.post("/search/delete", midAuth, async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.body.delete);
    res.redirect(`/search?search=${req.query.search}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
