import { Component } from "react";

export default class Contact extends Component {
  render() {
    // console.log(this.props.userDetails);
    const userDetails = this.props.userDetails;
    return (
      <div>
        <h2>Contact Class Component</h2>
        <p>First Name: {userDetails.firstName}</p>
        <p>Last Name: {userDetails.lastName}</p>
        <p>Age: {userDetails.age}</p>
        <p>Designation: {userDetails.designation}</p>
      </div>
    );
  }
}
