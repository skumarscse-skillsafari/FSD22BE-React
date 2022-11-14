// import { useContext } from "react";
// import UserContext from "./userContext";
// import Home from "./Components/Home";
import Auth from "./Firebase-Auth/Components/Auth";
// import "./App.css";

function App() {
  // const user = useContext(UserContext);
  // console.log(user);
  return (
    // <UserContext.Provider value={user}>
    <div className="App">
      {/* <Home /> */}
      <Auth />
    </div>
    // </UserContext.Provider>
  );
}

export default App;
