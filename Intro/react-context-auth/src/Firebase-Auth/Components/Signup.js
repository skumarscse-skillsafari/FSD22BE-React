import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <h2>Signup Component</h2>
      <form>
        <div>
          <label htmlFor="email">Enter E-mail:</label>
          <input type="text"></input>
        </div>
        <div>
          <label htmlFor="password">Enter Password:</label>
          <input type="password"></input>
        </div>
        <div>
          <button>Signup</button>
        </div>
        <div>
          <p>
            Already Registerd? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
