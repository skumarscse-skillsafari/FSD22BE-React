import { Component } from "react";

export default class StateProp extends Component {
  render() {
    return (
      <div>
        <h2>StateProp Class Component</h2>
        <p>First Name from StateDemo : {this.props.firstName}</p>
      </div>
    );
  }
}
