import { Component } from "react";
import Education from "./Education";
import StateDemo from "./StateDemo";
// import Education from "../Components/Education";
// import React from "react";
// const Home = () => {
//   return (
//     <div>
//       <h2>Home Component</h2>
//     </div>
//   );
// };

// export default Home;
// class Home extends React.component
class Home extends Component {
  render() {
    // console.log(React);
    return (
      <div>
        <h2>Home Class Component</h2>
        <StateDemo />
        <Education />
      </div>
    );
  }
}

export default Home;
