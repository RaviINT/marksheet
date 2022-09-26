const client=require("../../configuration/client")
const check_RollNo =async (value,next,res)=>{
    // console.log("value",value)
    const data= await client.query("SELECT * from subjects WHERE roll_no=$1",[value])
   
    if(data.rows.length>0){
        return res.send("Subject is already exists with this roll number")
    }
    return next()
}
module.exports=check_RollNo