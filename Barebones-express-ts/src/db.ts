// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI_LOCAL as string);
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.error("MongoDB connection failed", err);
//     process.exit(1);
//   }
// };

import { MongoClient } from "mongodb";

console.log("MONGO_URI =", process.env.MONGO_URI_LOCAL);

export const client = new MongoClient(process.env.MONGO_URI_LOCAL as string);

export const connectDB = async () => {
  await client.connect();
};
