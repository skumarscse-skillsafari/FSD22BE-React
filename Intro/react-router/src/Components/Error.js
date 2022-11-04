import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;
