import express from "express";
import mongoDB from "./src/BACKEND/mongoDB.mjs";
import cors from "cors";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
mongoDB(app);
app.listen(port, () => {
  console.log(`server is created at http://localhost:${port}`);
});
