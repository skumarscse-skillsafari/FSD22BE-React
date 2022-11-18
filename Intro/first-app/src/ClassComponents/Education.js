import { Component } from "react";
import Contact from "./Contact";

export default class Education extends Component {
  render() {
    const userDetails = {
      firstName: "SkillSafari",
      lastName: "EduKeys",
      age: 30,
      designation: "Software Engineer",
    };
    return (
      <div>
        <h2>Education Class Component</h2>
        <ul>
          <li>B.E - CSE</li>
          <li>M.E - CSE</li>
        </ul>
        <Contact userDetails={userDetails} />
      </div>
    );
  }
}

// export default Education;
