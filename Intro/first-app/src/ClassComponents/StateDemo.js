import React from "react";
import StateProp from "./StateProp";

export default class StateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "SkillSafari",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        lastName: "EduKeys",
      };
    });
    console.log(this.state);
  }
  render() {
    // console.log(React);
    return (
      <div>
        <h2>StateDemo Class Component</h2>
        <p>First Name : {this.state.firstName}</p>
        <p>Last Name : {this?.state?.lastName}</p>
        <StateProp firstName={this.state.firstName} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
