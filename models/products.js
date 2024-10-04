import mongoose from  "mongoose"

const Data=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
},{
timeStamp:true
});
const products =mongoose.model("products",Data);
export default products;  