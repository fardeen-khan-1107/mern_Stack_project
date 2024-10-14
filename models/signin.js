import mongoose from "mongoose"

const pass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const signin=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
         required:true       
    },
    password:{
        type:String,
        required:true,
        validatation:{
            validatation:function(value){
            return pass.test(value);
            },
            message:"passwords must contain 8 character,including uppercase, lowercase and special characters"
        }
    }
})

const data=mongoose.model('data',signin);
export default data;