function ChildComponent({ users }) {
  // console.log(props); // { users: Array(3) }
  // console.log(props.users); // [ {...}, {...}, {...} ]
  console.log(users); // [ {...}, {...}, {...} ]
  return (
    <div className="ChildComponent">
      <h2>Child Component</h2>
      <p>This is Child component</p>
      {users.map((user, index) => (
        <div className="child-users" key={index}>
          <p>User ID: {user.id}</p>
          <p>User name: {user.name}</p>
          <hr />
        </div>
      ))}
      <hr />
    </div>
  );
}

export default ChildComponent;
