import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      alert("User Logged-In Successfully");
      // navigate to "Dashboard Page"
      navigate("/dashboard");
    } else {
      alert("Wrong credentilas...!");
    }
  };
  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <p>
          <input
            type="email"
            value={email}
            placeholder="Enter E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="Login" />
        </p>
      </form>
      <p>
        Not yet Registered? <Link to="/">Click Here to Register</Link>
      </p>
    </div>
  );
};

export default Login;
