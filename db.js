const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_ATLAS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
