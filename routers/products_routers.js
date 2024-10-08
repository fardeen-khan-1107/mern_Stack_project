import express from "express"
import {add,remove,get_data,update} from  "../Controllers/Product_Controllers.js"

const router = express.Router();

router.post("/add", add);

router.get("/get_data",get_data);

router.delete("/remove/:id",remove);

router.put("/update/:id",update)

export default router;
