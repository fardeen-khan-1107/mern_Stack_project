import express from "express"
import {signup,login} from "../Controllers/signup_Controllers.js";
import {signupValidatation,loginValidatation} from "../Middleware/signupValidatation.js";

const router=express.Router();

router.post("/signup",signupValidatation,signup);

router.post("/login",loginValidatation,login)

export default router;