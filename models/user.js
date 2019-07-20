const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 10
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      validate: validator.isEmail
    },
    password: {
      type: String,
      trim: true,
      required: true
    },

    avatar: {
      type: String
    },

    token: {
      type: String
    },
    todo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Todo"
      }
    ]
  },
  { timestamps: true }
);

userSchema.methods.genToken = async function(cb) {
  const user = this;

  const token = await jwt.sign(
    { _id: JSON.stringify(user._id) },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "12h" }
  );
  user.token = token;
  await user.save();
  cb(token);
};

userSchema.methods.checkUser = async function(
  email,
  reqPassword,
  userPassword,
  cb
) {
  try {
    const user = this;

    await bcrypt.compare(reqPassword, userPassword, function(err, value) {
      if (err) {
        return console.log("Password are not match");
      }
      cb(value);
    });
  } catch (e) {
    console.log("Error From CheckUser Method");
  }
};

userSchema.pre("save", async function(next) {
  const user = this;
  try {
    if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 8);

      next();
    }
  } catch (e) {
    console.log("Error from pre save");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
