import products from "../models/products.js"

const add = async (req, res) => {
  try {
    const items = req.body;
    console.log(items);
    if (!items.name || !items.price || !items.image) {
      return res.status(400).json({ message: "Please provide complete product details." });
    }
    const newItems = new products(items);
    const result = await newItems.save();
    res.status(201).json({message: "Product added successfully",
      data:result
    });
  } catch (error) {
    console.error("There is something went wrong:", error.message);
    res.status(500).json({ success: false, message: "An error occurred while adding the product." });
  }
};


//



//for deleteing the data

const remove=async(req,res)=>{
  try{
   const {id}=req.params;
   const result=await products.findByIdAndDelete(id);
   if(!result){
   res.status(404).json({message:"data not found"});
  }
    res.status(200).json({message:"data is removed from the backend"})
}
catch(error){
  console.error("There is something went wrong:",error.message);
  res.status(500).json({message:"data is not able to trace"})
}
}

export {add,remove};
