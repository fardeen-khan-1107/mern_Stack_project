import signin from "../models/signin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const signup=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        
        const user=await signin.findOne({email});
        if(user){
           return res.status(400).json({message:"use already exists"})
        }
            const hashingpassword=await bcrypt.hash(password,10);
            const user1=new signin({
                name,
                email,
                password:hashingpassword
            })
            if(name&&email&&password){
                await user1.save()
                return res.status(201).json({message:"signup sucessful"})
            }
        }
    catch(error){
        res.status(500).json({message:"Internal server error",error})
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await signin.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Authentication failed" });
        }
    
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            return res.status(404).json({ message: "Authentication failed" });
        }
        else{
        // Create and send token
        const token = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            {expiresIn: '12h'}
        );

        return res.status(200).json({ message: "Login successful", token });
    }
    } catch (error) {
         res.status(500).json({ message: "Internal server error", error });
    }
};


export {signup,login};