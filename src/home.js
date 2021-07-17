import React, { Component } from "react";
import background from "./tree.png"

class Home extends Component {
  render() {
    return (
      <div id="back" style={{ backgroundImage: `url(${background})`,height:"750px" }}>
      
        
        <h1 id="home">Rowshaenah's....</h1>
      </div>
      
      
    );
  }
}

export default Home;