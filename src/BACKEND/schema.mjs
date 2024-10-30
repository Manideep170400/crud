import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
  email: String,
  name: String,
  age: String,
  phoneNumber: Number,
});

const tablerData = () => {
  const table = mongoose.model("table", tableSchema);
  return table;
};

export default tablerData;
