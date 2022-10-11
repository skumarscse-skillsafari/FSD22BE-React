// import users from "../Data/data";
import { useEffect, useState } from "react";
// import axios from "axios";

function Data() {
  //   let user = {
  //     id: 10001,
  //     firstName: "SkillSafari",
  //     lastName: "EduKeys",
  //     age: 30,
  //     designation: "Full-stack developer",
  //     email: "info@skillsafari.in",
  //   };
  // console.log(useState("Hello")); // Array ["Hello", function]
  // const [varName, setFunction] = useState(initialValue)
  // const [firstName, lastName] = ["SkillSafari", "EduKeys"];
  // console.log(firstName, lastName); // SkillSafari EduKeys
  // let [name, setName] = useState("SkillSafari");
  // // console.log(useState("SkillSafari")[1]);
  // console.log(name); // SkillSafari
  // setName("John");
  // console.log(name); // John
  // setName("Jack");
  // console.log(name);
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    async function getUsers() {
      let res = await fetch("https://fakestoreapi.com/users");
      let data = await res.json();
      console.log(data);
      setUsers(data);
    }
    getUsers();
  }, []);
  return (
    <div className="Data">
      <h2>User Details</h2>
      {users.map((user, index) => {
        return (
          <div className={`user-${index + 1}`} key={index}>
            {/* id, username, email, name, city */}
            <p>ID: {user.id}</p>
            <p>First Name: {user.name.firstname}</p>
            <p>Last Name: {user.name.lastname}</p>
            <p>E-mail: {user.email}</p>
            <p>City: {user.address.city}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Data;
