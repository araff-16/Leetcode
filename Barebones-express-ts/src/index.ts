import dotenv from "dotenv";
dotenv.config(); // MUST be first line

import express from "express";
import route1 from "./routes/route1";
// import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

// app.use("/api/route1", route1);

// app.get("/", (req, res) => {
//   res.send("Hello, TypeScript Express App!!!");
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const startServer = async () => {
  try {
    // console.log("MongoDB connected");
    // await connectDB();

    app.use("/api/route1", route1);

    app.get("/", (req, res) => {
      res.send("Hello, TypeScript Express App!!!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
};

startServer();
