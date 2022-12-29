import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.get("/", (req, res) => {
  res.send("<h1>Auth System App hosted successfully in Cyclic.sh</h1>");
});

app.use("/api/v1/auth", authRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(`Error: ${err} not connected`));
