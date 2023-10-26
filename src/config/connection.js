const mongoose = require("mongoose");

class Connection {
  constructor() {
    this.DataBaseConnectionMongoDB();
  }

  DataBaseConnectionMongoDB() {
    this.mongoDBConnection = mongoose
      .connect("mongodb://localhost/nodejs", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        console.log("Connection established successfully !");
      })
      .catch((error) => {
        console.log(`Connection failed with Mongo DB: ${error}`);
      });
  }
}

module.exports = new Connection();
