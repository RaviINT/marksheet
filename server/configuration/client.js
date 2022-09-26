const { Client } = require("pg");
require("dotenv").config();
const port = process.env.PORT;
// console.log("port",port)

const client = new Client({
  // user: "iorgnzco",
  // port: port,
  // password: "BJHVtrurLa1vp4kLX-7KIYwbdBKFS3h9",
  // database: "iorgnzco",
  // host: "tiny.db.elephantsql.com",
  user: "postgres",
  port: 5432,
  password: "Ravi@123",
  database: "marksheet",
  host: "localhost",
});

client
  .connect()
  .then(() => console.log("connected to the database"))
  .catch((err) => console.log("err==>", err.message));
module.exports = client;
