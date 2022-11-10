import { useContext } from "react";
import FirstNameContext from "../firstNameContext";
const Contact = () => {
  const firstName = useContext(FirstNameContext);
  return (
    <div>
      <h2>This is Contact Component.</h2>
      <p>The First Name in Contact Component: {firstName}</p>
    </div>
  );
};

export default Contact;
