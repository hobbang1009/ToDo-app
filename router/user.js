const express = require("express");
const { midAuth } = require("../middlewares/midAuth");
const User = require("../models/user");
const { upload, deleteObj } = require("../middlewares/AWSupload");
const router = express.Router();

router.get("/user/join", async (req, res) => {
  if (req.query.Location !== "undefined") {
    const location = req.query.Location;
    await res.render("join", { pageName: "Join", location });
  } else {
    const location = "seoul";
    await res.render("join", { pageName: "Join", location });
  }
});

router.post("/user/join", async (req, res) => {
  try {
    const user = await new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    await user.save();
    user.genToken(value => {
      res
        .status(200)
        .cookie("token", value, { maxAge: 900000, httpOnly: true });
      res.redirect("/");
    });
  } catch (e) {
    return console.log("error from post join");
  }
});

router.get("/user/login", (req, res) => {
  if (req.query.Location !== "undefined") {
    const location = req.query.Location;
    res.render("login", { pageName: "Login", location });
  } else {
    res.render("Login", { pageName: "Login", location: "seoul" });
  }
});

router.post("/user/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    console.log("User Not found");
    return res.redirect("/user/join");
  }
  await user.checkUser(email, password, user.password, value => {
    if (value === true) {
      user.genToken(value => {
        res
          .status(200)
          .cookie("token", value, { maxAge: 86400000, httpOnly: true });
        res.redirect("/");
      });
    } else {
      console.log("Wrong password");
      res.status(400);
      return res.redirect("/user/login");
    }
  });
});

router.post("/user/profile", midAuth, async (req, res) => {
  try {
    if (req.body.password !== req.body.password2) {
      res.status(400);
      console.log("password incorrect");
      return res.redirect(`/user/${req.user._id}`);
    }
    const user = await User.findById(req.user._id);
    user.name = req.body.name;
    user.password = req.body.password;

    await user.save();

    res.redirect(`/user/${req.user._id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post(
  "/user/upload",
  midAuth,
  upload.single("avatar"),
  async (req, res) => {
    try {
      if (req.user.avatar) {
        await deleteObj(req.user.avatar.split("/avatar/")[1].toString());
      }
      req.user.avatar = req.file.location;
      await req.user.save();
      res.redirect("/");
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

router.get("/user/logout", midAuth, async (req, res) => {
  await res.clearCookie("token");
  res.redirect("/");
});

router.post("/user/delete", midAuth, async (req, res) => {
  try {
    await User.findByIdAndRemove(req.user._id);
    res.redirect("/");
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/user/:id", midAuth, async (req, res) => {
  const user = await User.findById(req.params.id);
  const userName = user.name;
  const userEmail = user.email;
  const userID = req.user._id;
  const queryID = req.params.id;
  const userAvatar = req.user.avatar || "";
  res.render("userProfile", {
    pageName: "Profile",
    userID,
    queryID,
    userName,
    userEmail,
    userAvatar
  });
});

module.exports = router;
