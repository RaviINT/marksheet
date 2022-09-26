const client=require("../../configuration/client")
const check_Attendence =async (value,next,res)=>{
    // console.log("value",value)
    const data= await client.query("SELECT * from attendence WHERE roll_no=$1",[value])
   
    if(data.rows.length>0){
        return res.send("Attendence is already exists with this roll number")
    }
    return next()
}
module.exports=check_Attendence