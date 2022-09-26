const client = require("../configuration/client");

module.exports = {
  getSubject: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let subjects = client.query("SELECT * FROM skills WHERE roll_no=$1", [id]);
        resolve(subjects);
      } catch (err) {
        reject(err);
      }
    });
  },
  post: (value) => {
    return new Promise(function (resolve, reject) {
      try {
        const addData = client.query(
          "INSERT INTO skills (roll_no,development,attitude,responsibility,music,hardwork) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
          [
            value.roll_no,
            value.development,
            value.attitude,
            value.responsibility,
            value.music,
            value.hardwork,
          ]
        );

        resolve(addData);
      } catch (err) {
        reject(err.message);
      }
    });
  },
  remove: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let delData = client.query("DELETE FROM skills WHERE roll_no=$1", [id]);

        resolve(delData);
      } catch (err) {
        reject(err.message);
      }
    });
  },
  updateById: (id, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(id, body);
        let updateData = await client.query(
          `UPDATE skills SET (development,attitude,responsibility,music,hardwork)=($1,$2,$3,$4,$5) WHERE roll_no=${id}`,
          [
            body.development,
            body.attitude,
            body.responsibility,
            body.music,
            body.hardwork,
          ]
        );
        resolve(updateData);
      } catch (err) {
        reject(err);
      }
    });
  },
};
