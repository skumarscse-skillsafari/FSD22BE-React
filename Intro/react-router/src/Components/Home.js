import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Home;
