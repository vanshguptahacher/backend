const app = require("./src/app")
require('dotenv').config()
const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => console.log(err));
}

connectToDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
