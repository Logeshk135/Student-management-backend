import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);  // must not be undefined
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB connection failed", err);
    process.exit(1); // stop the server if DB fails
  }
};

export default connectDB;
