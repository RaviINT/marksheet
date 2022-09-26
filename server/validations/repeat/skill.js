const client=require("../../configuration/client")
const check_Skills =async (value,next,res)=>{
    const data= await client.query("SELECT * from skills WHERE roll_no=$1",[value])

    if(data.rows.length>0){
        return res.send("Skills is already exists with this roll number")
    }
    return next()
}
module.exports=check_Skills