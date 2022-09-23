const client = require("../configuration/client");
const bcrypt = require("bcryptjs");
module.exports = {
  getUserByEmail: (email) => {
    return new Promise(function (resolve, reject) {
      try {
        let data = client.query("SELECT * from registration WHERE email=$1", [
          email,
        ]);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  post: (value) => {
    return new Promise(async function (resolve, reject) {
      try {
        console.log("value pass",value.password)
        const hashPass = await bcrypt.hash(value.password, 10);
        // console.log("hash", hashPass.length);
        const addData = client.query(
          "INSERT INTO registration (name,email,password) VALUES ($1,$2,$3)",
          [value.name, value.email, hashPass],
          (err, res) => {
            console.log(res.rowCount);
            if (res.rowCount > 0) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      } catch (err) {
        reject(err.message);
      }
    });
  },
};
