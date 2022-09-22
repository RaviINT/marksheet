const {getImageById}=require("../models/image")
module.exports={
    getImageById:(req,res)=>{
        console.log("id",req.params.id)
        const id=req.params.id
        getImageById(id,(err,results)=>{
            if(err){
                return
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"no image found "
                })
            }
            return res.send({
                success:1,
                data:results
            })
        })
    }
}