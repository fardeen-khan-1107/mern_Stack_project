import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db.js";
import  products from "./routers/products_routers.js"
import signin from "./routers/signin_routers.js";

dotenv.config();
const app = express();
const PORT=process.env.PORT||5000
app.use(express.json());

async function main() {
  try {
    await connect();
    console.log("Connected to the database");
    app.use("/api/product", products);
    app.use("/api/signin",signin);
    app.listen(PORT, () => {
      console.log("Server is running on port"+PORT);
    });
  } catch (error) {
    console.error("Error connecting to the database or starting the server:", error);
  }
}

main();
