import express from "express"
import {add,login} from "../Controllers/signup_Controllers.js";
import {signupValidatation,loginValidatation} from "../Middleware/signupValidatation.js";

const router=express.Router();

router.post("/add",signupValidatation,add);

router.post("/login",loginValidatation,login)

export default router;