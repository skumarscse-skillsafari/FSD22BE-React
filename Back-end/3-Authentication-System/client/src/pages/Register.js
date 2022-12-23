import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log(name);
  //   console.log(email);
  //   console.log(password);
  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json(); // { success:..., data:..., msg:...}
    console.log(data);
    if (data.success === true) {
      // navigate to "Login Page"
    }
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={registerUser}>
        <p>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
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
          <input type="submit" value="Register" />
        </p>
      </form>
    </div>
  );
};

export default Register;
