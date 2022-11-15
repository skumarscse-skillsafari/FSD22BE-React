import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Home = () => {
  const [user, setUser] = useState("");
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user.email);
      // console.log(user.uid);
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        alert("You have successfully logged out.");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Welcome, {user}</h2>
      <div>
        <button onClick={handleLogout}>LogOut</button>
      </div>
    </div>
  );
};

export default Home;
