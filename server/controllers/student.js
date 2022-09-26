const { get, post, remove, getById, updateById } = require("../models/student");
const {
  validateBodyStudent,
} = require("../validations/body/student.validator");
const {
  validateUpdateBodyStudent,
} = require("../validations/body/student.validator");
const client = require("../configuration/client");
module.exports = {
  getUser: async (req, res) => {
    try {
      const data = await get();
      if (data.rows.length == 0) {
        res.send("Something went wrong. Please try again");
      } else {
        res.json(data.rows);
      }
    } catch (err) {
      console.log("getErr", err.message);
    }
  },
  postUser: async (req, res) => {
    const { error, value } = validateBodyStudent(req.body);
    if (error) {
      return res.send(error.details);
    }
    try {
      const checkData =await client.query(
        "SELECT roll_no FROM students WHERE roll_no=$1",
        [req.body.roll_no]
      );
      console.log(checkData)
      if (checkData.rows.length == 0) {
        let data = await post(value);
        if (data.rows.length != 0) {
          res.json({
            msg: "student added successfully",
            row: data.rows,
          });
        } else {
          res.send("Something went wrong");
        }
      } else {
        res.send("Student with this Roll Number is already Added");
      }
    } catch (err) {
      console.log("postErr", err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let delData = await remove(req.params.id);
      if (delData.rowCount > 0) {
        res.send("User deleted successfully");
      } else {
        res.send("User not deleted");
      }
    } catch (err) {
      console.log("deleteErr", err.message);
    }
  },
  getById: async (req, res) => {
    try {
      let data = await getById(req.params.id);
      console.log("getById", data);
      if (data.rows == 0) {
        res.send("User not found");
      } else {
        res.json(data.rows[0]);
      }
    } catch (err) {
      console.log("getOneErr", err);
    }
  },
  updateById: async (req, res) => {
    try {
      const { error, value } = validateUpdateBodyStudent(req.body);
      if (error) {
        return res.send(error.details);
      }
      let updateData = await updateById(req.params.id, req.body);

      if (updateData.rowCount > 0) {
        res.send("User updated successfully");
      } else {
        res.send("User not updated");
      }
    } catch (err) {
      console.log("updateErr", err.message);
    }
  },
};
