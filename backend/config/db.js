import mongoose from "mongoose";
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.DATABASE_URL)
       console.log('DATABASE CONNECTED SUCCESSFULLY !');
    } catch (error) {
        console.log("Error while connecting with database");
    }
}
export default connectDB;
