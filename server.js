import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db.js";
import  products from "./routers/products_routers.js"

dotenv.config();
const app = express();
app.use(express.json());

// Main function to connect to the database and start the server
async function main() {
  try {
    await connect();
    console.log("Connected to the database");
    app.use("/api/product", products);
    // Start the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error connecting to the database or starting the server:", error);
  }
}

main();
