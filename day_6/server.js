const app = require("./src/app");

const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://vansh:rIZ4SWLYH0v7xnpU@cluster0.viwz0es.mongodb.net/day-6",
    )
    .then(() => {
      console.log("connected to Database");
    })
    .catch((err) => console.log(err));
}

connectToDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
