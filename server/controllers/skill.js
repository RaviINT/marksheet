const { getSubject, post, remove, updateById } = require("../models/skill");
const client = require("../configuration/client");
const {
  validateUpdateBodySkill,
} = require("../validations/body/skill.validator");
module.exports = {
  getSubject: async (req, res) => {
    const subjects = await getSubject(req.params.id);

    if (subjects.rows.length != 0) {
      return res.json(subjects.rows);
    } else {
      return res.send("No Skills");
    }
  },
  addSkill: async (req, res) => {
    try {
      const data = await client.query(
        "SELECT * from students WHERE roll_no=$1",
        [req.body.roll_no]
      );

      if (data.rows.length > 0) {
        let subject = await post(req.body);
        if (subject.rows.length != 0) {
          return res.json({
            msg: "Skills added successfully",
            row: subject.rows,
          });
        } else {
          return res.send("Something went wrong");
        }
      } else {
        return res.send("No Student exists with this roll number");
      }
    } catch (err) {
      console.log("postErr", err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let delData = await remove(req.params.id);
      if (delData.rowCount > 0) {
        res.send("Skills deleted successfully");
      } else {
        res.send("There is no Skills");
      }
    } catch (err) {
      console.log("deleteErr", err.message);
    }
  },
  updateById: async (req, res) => {
    try {
      const { error, value } = validateUpdateBodySkill(req.body);
      if (error) {
        return res.send(error.details[0].message);
      }
      let updateData = await updateById(req.params.id, req.body);

      if (updateData.rowCount > 0) {
        res.send("Skills updated successfully");
      } else {
        res.send("Something went wrong");
      }
    } catch (err) {
      console.log("updateErr", err.message);
    }
  },
};
