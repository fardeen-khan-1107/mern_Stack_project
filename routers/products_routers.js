import express from "express"
import {add,remove,get_data} from  "../Controllers/Product_Controllers.js"

const router = express.Router();

router.post("/add", add);

router.get("/get_data",get_data);

router.delete("/remove/:id",remove);

export default router;
