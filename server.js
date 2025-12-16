import express from "express";
import cors from "cors";
import routes from "./routes/students.js";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config(); // load .env variables

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.APPLICATION_FRONTEND_URL.trim(),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);


app.get("/", (req, res) => {
  res.send("Server is running");
});


app.use("/api/students", routes);

// Connect DB then start server
const startServer = async () => {
  try {
    await connectDB(); // wait until DB is connected
    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000} and DB Connected`
      );
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
