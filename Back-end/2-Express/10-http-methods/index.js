import express from "express";
import userRoutes from "./Routes/userRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
const app = express();

app.use(express.static("./public"));

// send data as form
app.use(express.urlencoded({ extended: false }));

// send data as json
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
