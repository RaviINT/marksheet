const client = require("../configuration/client");

module.exports = {
  getSubject: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let attendence = client.query("SELECT * FROM attendence WHERE id=$1", [
          id,
        ]);
        resolve(attendence);
      } catch (err) {
        reject(err);
      }
    });
  },
  post: (value) => {
    return new Promise(function (resolve, reject) {
      try {
        const addData = client.query(
          "INSERT INTO attendence (roll_no,term_1,term_2) VALUES ($1,$2,$3) RETURNING *",
          [value.roll_no, value.term_1, value.term_2]
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
        let delData = client.query("DELETE FROM attendence WHERE roll_no=$1", [
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
        console.log(id, body);
        let updateData = await client.query(
          `UPDATE attendence SET (term_1,term_2)=($1,$2) WHERE roll_no=${id}`,
          [body.term_1, body.term_2]
        );
        resolve(updateData);
      } catch (err) {
        reject(err);
      }
    });
  },
};
