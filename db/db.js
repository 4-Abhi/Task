const mongoose = require("mongoose");

const db = "mongodb://127.0.0.1:27017/storedb";
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Db Connected");
  })
  .catch((er) => {
    console.log("Db Problem");
  });

module.exports = mongoose;
