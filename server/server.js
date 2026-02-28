import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDB(); // 👈 DB connect yaha call karo

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],  // frontend URLs
    credentials: true,
  }));
app.use(express.json());
app.use("/api/users",userRoutes); //  User routes yaha use karo

app.get("/", (req, res) => {
  res.send("AI Mock Interview API Running ...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
}); 