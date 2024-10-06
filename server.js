import express from "express";
import dotenv from "dotenv";
import {connect} from "./config/db.js"
import add from "./routers/products_routers.js"

dotenv.config();
const app = express();
app.use(express.json());


async function main() {
  try{
    await connect();
    console.log("connected to database");

    app.use("/api/product",add)

    app.listen(3000,() =>{
      console.log("server is running on port 3000");
    });
  }

  catch(error){
    console.log(error);
  }
}
main()