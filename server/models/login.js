const client = require("../configuration/client");

module.exports = {
  storeData: (value) => {
    return new Promise((resolve, reject) => {
      try {
        let loggedIn = client.query(
          "INSERT INTO loginData (login_date,login_time,login_status,ip) VALUES ($1,$2,$3,$4)",
          [value.date, value.time, value.status, value.ip]
        );
        resolve(loggedIn);
      } catch (err) {
        reject(err);
      }
    });
  },
};
