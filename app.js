const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const globalRouter = require("./router/global");
const userRouter = require("./router/user");
const boardRouter = require("./router/board");
const searchRouter = require("./router/search");
const app = express();
require("dotenv").config({ path: "config/dev.env" });
require("./db");

const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "/public")));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(globalRouter);
app.use(userRouter);
app.use(boardRouter);
app.use(searchRouter);

app.listen(port, () => {
  console.log(`listening port ${port}`);
});
