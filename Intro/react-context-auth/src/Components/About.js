import { useContext } from "react";
import UserContext from "../userContext";
import Profile from "./Profile";

const About = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>This is About Component.</h2>
      <p>The First Name in About Component: {user.lastName} </p>
      <Profile />
    </div>
  );
};

export default About;
