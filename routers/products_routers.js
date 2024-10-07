import express from "express"
import {add,remove,get_data} from  "../Controllers/Product_Controllers.js"

const router = express.Router();

router.post("/add", add);

router.get("/get_data",get_data);

router.delete("/remove/:id",remove);

//more routes to be make

export default router;
