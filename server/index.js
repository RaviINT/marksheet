const express = require("express");
const app = express();
const client = require("./configuration/client");
app.use(express.json());
//Routes
//GET Route
app.get("/student", async (req, res) => {
  try {
    const list = await client.query("SELECT * FROM students");
    res.send(list.rows);
  } catch (err) {
    console.log(err.message);
  }
});
//Post Route
app.post("/student", async (req, res) => {
  try {
    const { name } = req.body;
    const newName = await client.query(
      "INSERT INTO students (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.json(newName.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
//Single Student
app.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await client.query("SELECT * FROM students WHERE id=$1", [
      id,
    ]);
    res.send(student.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
//Update
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const update = await client.query(
      "UPDATE students SET name =$1 WHERE id=$2",
      [name, id]
    );
    res.json("student is updated");
  } catch (err) {
    console.log(err.message);
  }
});
//Delete
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const del = await client.query("DELETE FROM students WHERE id=$1", [id]);
    res.json("student is deleted");
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(5000, () => {
  console.log("connected to 5000");
});
