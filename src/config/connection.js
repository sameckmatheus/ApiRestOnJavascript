// const mongoose = require("mongoose");
//const { connection } = require('mongoose');

class Connection {
  constructor() {
    // this.DataBaseConnectionMongoDB();
    this.DataBaseConnectionMySQL();
  }

  /*DataBaseConnectionMongoDB() {
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
  }*/

  DataBaseConnectionMySQL() {
    const mysql = require('mysql2/promise');

    const connectionConfig = {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'saap'
    }

    this.mysqlDBConnection = mysql.createConnection(connectionConfig)
    .then((connection) => {
        console.log("Conexão estabelecida com sucesso!");
        return connection;
    })
    .catch((error) => {
        console.log(`Falha na conexão com o MySQL: ${error}`);
        throw error; 
    });
  }
}

module.exports = new Connection();
