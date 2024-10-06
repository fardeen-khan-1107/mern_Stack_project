import  mongoose  from "mongoose";

const Data=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{
timeStamp:true
});
const products =mongoose.model("products",Data);
export default products;  