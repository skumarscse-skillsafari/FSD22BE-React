import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
const SharedProductComponent = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <h2>SharedProductComponent</h2>
      <Outlet context={products} />
    </div>
  );
};

export default SharedProductComponent;
