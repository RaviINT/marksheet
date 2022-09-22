const client = require("../configuration/client");
const bcrypt=require("bcryptjs")
module.exports = {
  get: (email) => {
    return new Promise(function (resolve, reject) {
      try {
        console.log("getete",email)
        let data = client.query("SELECT * from data WHERE email=$1", [email]);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  post: (email, password) => {
    return new Promise(async function  (resolve, reject) {
      try {
        const hashPass=await bcrypt.hash(password,10)
        console.log("hash",hashPass)
        const addData = client.query(
          "INSERT INTO data (email,password) VALUES ($1,$2) RETURNING *",
          [email, hashPass]
        );
        resolve(addData);

      } catch (err) {
        reject(err.message);
      }
    });
  },
  getById: (email) => {
    return new Promise(function (resolve, reject) {
      try {
        let data = client.query("SELECT password from data WHERE email=$1", [
          email,
        ]);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
};
