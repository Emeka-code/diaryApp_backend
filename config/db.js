const mongoose = require("mongoose");
const Url = process.env.ONLINE_URI;

mongoose.connect(Url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
