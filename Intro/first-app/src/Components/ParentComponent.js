import ChildComponent from "./ChildComponent";

function ParentComponent() {
  let users = [
    { id: 10001, name: "John" },
    { id: 10002, name: "Jack" },
    { id: 10003, name: "Mary" },
  ];
  return (
    <>
      <h2>Parent Component</h2>
      <p>This is Parent component</p>
      {users.map((user, index) => (
        <div className="users" key={index}>
          <p>User ID: {user.id}</p>
          <p>User name: {user.name}</p>
          <hr />
        </div>
      ))}
      <hr />
      {/* <a href="____"></a> */}
      <ChildComponent users={users} />
    </>
  );
}

export default ParentComponent;
