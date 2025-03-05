// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import pollRoutes from "./routes/pollRoutes.js";
import petitionRoutes from "./routes/petitionRoutes.js";
import forumRoutes from "./routes/forumRoutes.js";
import liveQARoutes from "./routes/liveQARoutes.js";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);
app.use("/api/petitions", petitionRoutes);
app.use("/api/forums", forumRoutes);
app.use("/api/liveqa", liveQARoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
