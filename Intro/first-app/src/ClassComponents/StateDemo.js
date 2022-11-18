import React from "react";
import StateProp from "./StateProp";

export default class StateDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        count: prevState.count + 1,
      };
    });
    console.log(this.state);
  }
  render() {
    // console.log(React);
    return (
      <div>
        <h2>StateDemo Class Component</h2>
        <p>First Name : {this.state.count}</p>
        <button onClick={this.handleClick}>Click</button>
        <StateProp firstName={this.state.firstName} />
      </div>
    );
  }
}
