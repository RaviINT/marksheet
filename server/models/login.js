const client = require("../configuration/client");

module.exports = {
  storeData: (value) => {
    return new Promise(async (resolve, reject) => {
      try {
        let loggedIn = await client.query(
          "INSERT INTO loginData (login_date,login_time,login_status,ip,user_Id) VALUES ($1,$2,$3,$4,$5)",
          [value.date, value.time, value.status, value.ip, value.id]
        );

        resolve(loggedIn);
      } catch (err) {
        reject(err);
      }
    });
  },
  getData: (value) => {
    return new Promise(async (resolve, reject) => {
      try {
        
        let loggedIn = await client.query(
          "SELECT * FROM loginData WHERE user_id=$1",
          [value]
        );
       

        resolve(loggedIn);
      } catch (err) {
        reject(err);
      }
    });
  },
};
