const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
