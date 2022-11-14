import { createContext } from "react";

const user = {
  firstName: "SkilSafari",
  lastName: "EduKeys",
};
const UserContext = createContext(user);

export default UserContext;
