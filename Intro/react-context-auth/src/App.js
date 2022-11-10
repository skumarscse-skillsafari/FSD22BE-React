import FirstNameContext from "./firstNameContext";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const firstName = "SkillSafari";
  return (
    <FirstNameContext.Provider value={firstName}>
      <div className="App">
        <Home />
      </div>
    </FirstNameContext.Provider>
  );
}

export default App;
