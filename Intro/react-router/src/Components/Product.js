import { Link, useParams } from "react-router-dom";
const Product = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div>
      <h1>Single Product Component</h1>
    </div>
  );
};

export default Product;
