const client = require("../configuration/client");
module.exports = {
  get: () => {
    return new Promise(function (resolve, reject) {
      try {
        let data = client.query("SELECT * from data");
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },
  post: (email,password) => {
    return new Promise(function (resolve, reject) {
      try {
        const addData = client.query(
          "INSERT INTO data (email,password) VALUES ($1,$2) RETURNING *",
          [email,password]
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
        let data = client.query("SELECT password from data WHERE email=$1",[email]);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },

};
