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

  post: (name) => {
    return new Promise(function (resolve, reject) {
      try {
        const addData = client.query(
          "INSERT INTO students (name) VALUES ($1) RETURNING *",
          [name]
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
  updateById: (id, name, callBackFunction) => {
    
      return new Promise((resolve, reject) => {
        try{
          let updateData = client.query("UPDATE students SET name =$1 WHERE id=$2", [name, id])
          resolve(updateData);
        }catch (err) {
          reject(err);
        }
      })
  },
};
