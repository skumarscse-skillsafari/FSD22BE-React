import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h2>Login Component</h2>
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
          <button>Login</button>
        </div>
        <div>
          <p>
            Not yet Registerd? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
