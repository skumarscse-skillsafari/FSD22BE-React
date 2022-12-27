import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtdecode from "jwt-decode";
const Dashboard = () => {
  const [content, setContent] = useState("");
  const [tempContent, setTempContent] = useState("");
  const navigate = useNavigate();
  const updateContent = async (e) => {
    e.preventDefault();
    const req = await fetch("http://localhost:5000/api/v1/auth/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ content: tempContent }),
    });
    const data = await req.json();
    if (data.success) {
      setContent(tempContent);
      setTempContent("");
    } else {
      alert(data.msg);
    }
  };
  const getContent = async () => {
    const req = await fetch("http://localhost:5000/api/v1/auth/content", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.success) {
      setContent(data.content);
    } else {
      alert(data.msg);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtdecode(token);
      console.log(user); // { name: "Jack", email: "jack@skillsafari.in"}
      if (!user) {
        // navigate to login page
        navigate("/login");
      } else {
        getContent();
      }
    }
  }, [navigate]);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </p>
      <h2>Your Message: {content || "No new message found!!!"}</h2>
      <form onSubmit={updateContent}>
        <input
          type="text"
          placeholder="Enter something"
          value={tempContent}
          onChange={(e) => setTempContent(e.target.value)}
        />
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </div>
  );
};

export default Dashboard;
