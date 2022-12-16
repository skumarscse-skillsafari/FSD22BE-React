import { products } from "../../data.js";

export const getProducts = (req, res) => {
  res.status(200).json({ success: true, data: products });
};

export const getSingleProduct = (req, res) => {
  const { id } = req.params;
  const singleProduct = products.find((product) => product.id === Number(id));
  res.status(200).json({ success: true, data: singleProduct });
};
