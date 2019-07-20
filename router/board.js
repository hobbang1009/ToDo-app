const express = require("express");
const { midAuth } = require("../middlewares/midAuth");
const Todo = require("../models/todo");
const User = require("../models/user");
const router = express.Router();

router.post("/board", midAuth, async (req, res) => {
  try {
    const todo = await Todo.create({
      todo: req.body.todo,
      author: req.user._id
    });
    const user = await User.findById(req.user._id);
    user.todo = user.todo.concat([todo._id]);
    await todo.save();
    await user.save();
    res.redirect("/");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.post("/board/update", midAuth, async (req, res) => {
  try {
    const todo = await Todo.findById(req.query.id);
    todo.todo = req.body.todo;
    await todo.save();
    res.redirect("/");
  } catch (e) {
    res.status(400).send("ERROR FROM UPDATE BOARD");
  }
});

router.post("/board/check", midAuth, async (req, res) => {
  try {
    const todoID = req.body.todoID.split("/")[0];
    const todoCompleted = req.body.todoID.split("/")[1];
    const todo = await Todo.findById(todoID);
    if (todoCompleted === "false") {
      todo.completed = true;

      await todo.save();
      return res.redirect("/");
    } else {
      todo.completed = false;
      await todo.save();
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send("ERROR FROM CHECKBOX");
  }
});

router.post("/board/delete", midAuth, async (req, res) => {
  try {
    const deleteID = req.body.delete;
    await Todo.findByIdAndDelete(deleteID);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.status(400).send("ERROR FROM DELETE TODO");
  }
});

module.exports = router;
