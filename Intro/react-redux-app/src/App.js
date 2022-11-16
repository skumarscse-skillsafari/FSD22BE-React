import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Cart from "./Components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
