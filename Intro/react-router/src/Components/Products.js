import { Link, useOutletContext } from "react-router-dom";
const Products = () => {
  const products = useOutletContext();
  console.log(products);
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
