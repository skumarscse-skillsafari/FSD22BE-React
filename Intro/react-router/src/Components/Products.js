import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>
        <u>Products Component</u>
      </h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>Title: {product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <Link to={`/products/${product.id}`}>More info...</Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
