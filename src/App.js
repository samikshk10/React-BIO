import Navbar from "./component/Navbar";
import Bio from "./component/Bio";
import photo from '../src/assets/images/photo.jpg';

import "./assets/css/App.css";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="app__image-description">
          <div className="app__image-wrapper">
          <img src={photo} alt="samik Shakya"/>
          </div>
          <div className="app__bio">
            <Bio></Bio>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
