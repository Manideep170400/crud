import mongoose from "mongoose";

const mongo_URL = "mongodb://localhost:27017/curd";

const mongoDB = (app) => {
  mongoose.connect(mongo_URL).then((result) => {
    try {
      console.log("mongoDB is connected");
    } catch (error) {
      console.error("error", error);
    }
  });
};

export default mongoDB;
