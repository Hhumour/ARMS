const mongoose=require("mongoose");
var objectId=mongoose.Schema.Types.ObjectId
const jobDescription=require("./jobDescription");
module.exports={
   name:{
       type:String,
       required:true,
       minlength:2,
       maxlength:100
   },
   experience:{
       type:Number,
        multipleOf:0.5,
        maximum:30
   },
   email:{
       type:String,
       required:true,
       minlength:2,
       maxlength:100
    },
    aadhar:{
       type:String,
       required:true,
    },
    cv:{
      type:String,//to keep file type or string
      required:true,
    },
    skills:[{
       type:String,
       required:true,
       
    }],
    selection:{
       type:String,
       enum:["applied","in-progress","selected","rejected"]
    },
    appliedFor:{
       type:objectId,
       ref:"jobDescription"
    }
   
}