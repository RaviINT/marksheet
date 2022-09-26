const client=require("../../configuration/client")
const checkTable =async (value,next,res)=>{
    // console.log("value",value)
    const data= await client.query("SELECT email from registration WHERE email=$1",[value.email])
    
    if(data.rows.length>0){
        return res.status(201).send("User is already exists")
    }
    return next()
}
module.exports=checkTable