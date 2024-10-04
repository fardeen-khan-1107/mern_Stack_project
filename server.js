import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send("welcome fardeen");
});
console.log(`server is connected with ${process.env.MONGO_URL}`);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
