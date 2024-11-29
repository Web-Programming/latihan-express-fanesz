require("./mahasiswa");
require("./mahasiswa");

const mongoose = require("mongoose");
// let dbURI =
//   "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";
const dbURI = "mongodb://127.0.0.1:27017/pawii-si5c";

mongoose.connect(dbURI, {
  // useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
