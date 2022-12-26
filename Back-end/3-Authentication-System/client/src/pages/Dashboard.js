import { useState, useEffect } from "react";
import jwt from "jwt-decode";
const Dashboard = () => {
  const [content, setContent] = useState("");
  const [tempContent, setTempContent] = useState("");
  const updateContent = async (e) => {
    e.preventDefault();
    const req = fetch("http://localhost:5000/api/v1/auth/content", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ content: tempContent }),
    });
    const data = await (await req).json();
    if (data.success) {
      setContent(tempContent);
      setTempContent("");
    } else {
      alert(data.msg);
    }
  };
  return (
    <div>
      <h1>Dashboard Page</h1>
      <form onSubmit={updateContent}>
        <input
          type="text"
          placeholder="Enter something"
          value={tempContent}
          onChange={(e) => setTempContent(e.target.value)}
        />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Dashboard;
