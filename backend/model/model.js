import mongoose from "mongoose";

const apischema=new mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
})

const apiModel=mongoose.model('apidata',apischema);
export default apiModel;
