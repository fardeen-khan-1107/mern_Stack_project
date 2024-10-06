import express from "express"
import {add} from "../Controllers/Product_Controllers.js"

const app=express.Router();

app.post("/",add);

export default app;