import React, { Component } from "react";
 import background from "./about.png"
class About extends Component {
  render() {
    return (
      <div id="back" style={{ backgroundImage: `url(${background})` , 
 width:"1500px",height:"675px"} }>
 <h1 id="about1">Imagine..</h1>
 <h1 id="about2">Believe....</h1>
 <h1 id="about3">Achieve....</h1>
 </div>
 
    );
  }
}
 
export default About;