import  Joi from "joi";

const signupValidatation= (req,res,next)=>{
    const Schema=Joi.object({
        name:Joi.string().min(4).max(100).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    });
    const {error}=Schema.validate(req.body);
    if(error){
        res.status(400).json({message:"bad request",error});

    }
    next();
}

const loginValidatation=(req,res,next)=>{
    const Schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(5).required()
    });
    const {error}=Schema.validate(req.body);
    if(error){
        res.status(400).json({message:"bad request",error});
    }
    next();
}

export  {signupValidatation,loginValidatation};