import mongoose from "mongoose";
import api from "./api.mjs";
const mongo_URL = "mongodb://localhost:27017/curd";

const mongoDB = (app) => {
  mongoose.connect(mongo_URL).then((result) => {
    try {
      api(app);
      console.log("mongoDB is connected");
    } catch (error) {
      console.error("error", error);
    }
  });
};

export default mongoDB;
