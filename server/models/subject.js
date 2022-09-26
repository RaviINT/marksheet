const client = require("../configuration/client");

module.exports = {
  getSubject: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let subjects = client.query("SELECT * FROM subjects WHERE id=$1", [id]);
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
          "INSERT INTO subjects (roll_no,fa,fa_oral,sa,sa_oral) VALUES ($1,$2,$3,$4,$5) RETURNING *",
          [value.roll_no, value.fa, value.fa_oral, value.sa, value.sa_oral]
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
        let delData = client.query("DELETE FROM subjects WHERE roll_no=$1", [
          id,
        ]);

        resolve(delData);
      } catch (err) {
        reject(err.message);
      }
    });
  },
  updateById: (id, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(id,body)
        let updateData = await client.query(
          `UPDATE subjects SET (roll_no,fa,fa_oral,sa,sa_oral)=($1,$2,$3,$4,$5) WHERE roll_no=${id}`,
          [body.roll_no, body.fa, body.fa_oral, body.sa, body.sa_oral]
        );
        resolve(updateData);
      } catch (err) {
        reject(err);
      }
    });
  },
};
