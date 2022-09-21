const client=require("../../configuration/client")
const checkTable =async (req,res,next)=>{
    const data= await client.query("SELECT * from data WHERE email=$1",[req.body.email])
    if(data.rows.length>0){
        return res.send("User is already exists")
    }
    return next()
}
module.exports=checkTable