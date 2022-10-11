import { users, fruits, number, name, subjects, skills } from "../Data/data";

function Export() {
  console.log(users);
  console.log(fruits);
  console.log(number);
  console.log(name);
  console.log(subjects);
  let numbers = [1, 2, 3, 4, 5];
  return (
    <div className="Export-Component">
      <h2>This is Export Component</h2>
      <p>User ID: {users[0].id}</p>
      <p>
        Full Name: {`${users[0].name.firstname}, ${users[0].name.lastname}`}
      </p>
      <p>{subjects.subjectTwo}</p>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Export;
