import { Link } from "react-router-dom";
const NavBar = () => {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  };
  return (
    <ul style={navStyle}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavBar;
