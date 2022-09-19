const { Client } = require("pg");
const client = new Client({
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
