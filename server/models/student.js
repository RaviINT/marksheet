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
        
        resolve({delD:delData});
        
      } catch (err) {
        reject({ERR:err.message});
      }
    });
  },
  getById: (id, callBackFunction) => {
    client
      .query("SELECT * FROM students WHERE id=$1", [id])
      .then((results) => {
        return callBackFunction(results.rows);
      })
      .catch((err) => console.log("getByIdClient", err.message));
  },
  updateById: (id, name, callBackFunction) => {
    client
      .query("UPDATE students SET name =$1 WHERE id=$2", [name, id])
      .then((results) => {
        console.log("results", results);
        return callBackFunction(null, results);
      })
      .catch((err) => console.log("updateByIdClient", err.message));
  },
};
