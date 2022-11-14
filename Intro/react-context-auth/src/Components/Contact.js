import { useContext } from "react";
import UserContext from "../userContext";
const Contact = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h2>This is Contact Component.</h2>
      <p>The First Name in Contact Component: {user.firstName}</p>
    </div>
  );
};

export default Contact;
