import express from "express";
import { products } from "./products.js";
const app = express();

const baseUrl = "/api/v1";

app.get(baseUrl, (req, res) => {
  res.status(200).send(`
    <h1>Params and Query</h1>
    <a href="/api/v1/products">Click here to view products</a>
    `);
});

app.get(baseUrl + "/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, title, description, image } = product;
    return { id, title, description, image };
  });
  res.status(200).json(newProducts);
});

app.get(baseUrl + "/products/:productID", (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  res.status(200).json(singleProduct);
});

app.get(baseUrl + "/query", (req, res) => {
  // console.log(req.query);
  const { limit, search } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.title.includes(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.status(404).send(`
        <h1>Page not found</h1>
        <a href="/api/v1">Back to Home Page.</a>
    `);
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});
