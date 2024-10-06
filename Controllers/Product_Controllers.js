import products from "../models/products.js"

export const add=async (req,res)=>{
 const items=req.body;
 try{
    if(!items.name||!items.price||!items.image){
     return res.status(200).json("please provide a full details")
    }else{
        const newitems=new products(items);
        await newitems.save();}
 }
 catch(error){
    console.error("their is smoething went wrong", error.message);
    return res.status(500).json({success:false,message:"server Error"})
 }
};
