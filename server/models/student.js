const client = require("../configuration/client");
module.exports = {
  get: client
    .query("SELECT * FROM students")
    .then((results) => {
      return results;
    })
    .catch((err) => console.log("getClient", err.message)),

  post: (name, callBackFunction) => {
    client
      .query("INSERT INTO students (name) VALUES ($1) RETURNING *", [name])
      .then((res) => {
        return callBackFunction(null, res.rows);
      })
      .catch((err) => console.log("postClient", err.message));
  },
  remove: (id, callBackFunction) => {
    client
      .query("DELETE FROM students WHERE id=$1", [id])
      .then(() => {
        return callBackFunction(null, "deleted");
      })
      .catch((err) => console.log("removeClient", err.message));
  },
  getById: (id, callBackFunction) => {
    client
      .query("SELECT * FROM students WHERE id=$1", [id])
      .then((results) => {
        return callBackFunction(null, results.rows);
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
