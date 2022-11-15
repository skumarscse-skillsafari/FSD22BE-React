import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email);
  // console.log(password);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        setEmail("");
        setPassword("");
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Signup Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter E-mail:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
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
