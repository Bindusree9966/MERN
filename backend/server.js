const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/task",require("./routes/taskRoutes"))
app.get("/api", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});