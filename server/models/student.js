
const client = require("../configuration/client");
module.exports = {
  get: () => {
    return new Promise(function (resolve, reject) {
      try {
        let data = client.query("SELECT * FROM students");

        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  },

  post: (value) => {
    return new Promise(function (resolve, reject) {
      try {
        const addData = client.query(
          "INSERT INTO students (teachers_id,name,roll_no,date_of_birth,class,division) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
          [
            value.teachers_id,
            value.name,
            value.roll_no,
            value.date_of_birth,
            value.class,
            value.division,
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
        let delData = client.query("DELETE FROM students WHERE id=$1", [id]);

        resolve(delData);
      } catch (err) {
        reject(err.message);
      }
    });
  },
  getById: (id) => {
    return new Promise((resolve, reject) => {
      try {
        let data = client.query("SELECT * FROM students WHERE id=$1", [id]);
        resolve(data);
      } catch (err) {
        reject(err.message);
      }
    });
  },
  updateById: (id, body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const keys = Object.keys(body);
        let updateData = await client.query(
          `UPDATE students SET (name,roll_no,date_of_birth,class,division)=($1,$2,$3,$4,$5) WHERE id=${id}`,
          [
            body.name,
            body.roll_no,
            body.date_of_birth,
            body.class,
            body.division,
          ]
        );

        resolve(updateData);
      } catch (err) {
        reject(err);
      }
    });
  },
};
