import mongoose from "mongoose";
export  const connect=async()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongoose Connected: ${conn.connect.host}`);
  }  
  catch(error){
    console.log(error);
  }
}