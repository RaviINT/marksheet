const { get, post, remove, getById, updateById } = require("../models/student");

module.exports = {
  getUser: async (req, res) => {
    try {
      const data = await get();
      if(data.rows.length==0){
        res.send("Something went wrong. Please try again")
      }
      else{
        res.json(data.rows);
      }
      
    } catch (err) {
      console.log("getErr", err.message);
    }
  },
  postUser: async (req, res) => {
    try {
      let data=await post(req.body.name)
      if(data.rows.length!=0){
        res.json({
          msg:"User added successfully",
          row:data.rows
        });
      }else{
        res.send("Something went wrong" )
      }
      
    } catch (err) {
      console.log("postErr", err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      let delData=await remove(req.body.id)
      if(delData.rowCount>0){
        res.send("User deleted successfully")
      }else{
        res.send("User not deleted")
      }

    } catch (err) {
      console.log("deleteErr", err.message);
    }
  },
  getById: async(req, res) => {
    try {
      let data=await getById(req.body.id)
      console.log("getById", data)
      if(data.rows==0){
        res.send("User not found")
      }else{
        res.json(data.rows)
      }
    } catch (err) {
      console.log("getErr", err.message);
    }
  },
  updateById:async (req, res) => {
    try {
      let updateData=await updateById(req.body.id, req.body.name)
      if(updateData.rowCount>0){
        res.send("User updated successfully")
      }else{
        res.send("User not updated")
      }
    } catch (err) {
      console.log("updateErr", err.message);
    }
  },
};
