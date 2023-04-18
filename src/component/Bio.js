import React from "react";
import "../assets/css/Bio.css";
class Bio extends React.Component {
  render() {
    return (
      <div>
        <h1>FULLSTACK DEVELOPER</h1>
        <h4 className="bio__heading">PROFESSIONAL PROFILE</h4>

        <div className="bio__content">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>

        <p>
        It is a long established    fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
        </p>

        </div>
        <button className="btn__downloadCV">Download CV</button>
      </div>
    );
  }
}
export default Bio;
