import express from "express";
import dotenv from "dotenv";
import { connect } from "./config/db.js";
import cors from "cors";
import cluster from "cluster";
import os from "os";
import products from "./routers/products_routers.js";
import signin from "./routers/signin_routers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    await connect();
    console.log("Connected to the database");
    app.use("/api/product", products);
    app.use("/api/signin", signin);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database or starting the server:", error);
    process.exit(1); // Exit the process with failure
  }
}

if (cluster.isMaster) {
  const numCPUs = os.cpus().length; // Get the number of CPU cores
  console.log(`Master ${process.pid} is running`);

  // Fork workers for each CPU core
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers and replace them
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log("Starting a new worker...");
    cluster.fork();
  });
} else {
  startServer();
}
