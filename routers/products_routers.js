import express from "express"
import {add,remove} from  "../Controllers/Product_Controllers.js"

const router = express.Router();

router.post("/add", add);

router.get("/add",add);

router.delete("/remove/:id",remove);

export default router;
