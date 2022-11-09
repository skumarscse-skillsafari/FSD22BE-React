import { useParams, useOutletContext, Link } from "react-router-dom";
const Product = () => {
  const products = useOutletContext();
  console.log(products);
  const { productId } = useParams();
  console.log(productId);
  const product = products.find((product) => product.id === Number(productId));
  console.log(product);
  return (
    <div>
      <h1>Single Product Component</h1>

      <p>
        <strong>Product ID:</strong> {product.id}
      </p>
      <p>
        <strong>Product Title:</strong> {product.title}
      </p>
      <p>
        <strong>Product Price:</strong> {product.price}
      </p>
      <p>
        <strong>Product Description:</strong> {product.description}
      </p>
      <p>
        <strong>Product Category:</strong> {product.category}
      </p>
      <p>
        <strong>Product Image:</strong>{" "}
        <img
          src={product.image}
          alt={product.title}
          height="100px"
          width="100px"
        ></img>
      </p>
      <p>
        <strong>Product Rating Rate:</strong> {product.rating.rate}
      </p>
      <p>
        <strong>Product Rating Count:</strong> {product.rating.count}
      </p>
      <Link to="/products">Go back to Products</Link>
    </div>
  );
};

export default Product;
