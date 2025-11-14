import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (e) {
    console.error("MongoDB connection error:", e);
  }
}

export default connectDB;