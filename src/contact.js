import React, { Component } from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import {SiGmail} from 'react-icons/si';
import Spacer from 'react-add-space';
 
class Contact extends Component {
  render() {
    return (
      <div id="linkclass">
        <p><b>We'd love to hear from you. Here's how you can reach us...</b></p>
        <span style={{cursor: "pointer"}}><a id="link1" href="https://www.instagram.com/rowshaenah/"><FaInstagramSquare color="black" size="2em"/></a>
        <a id="link2" href="https://wa.me/9620880778"><Spacer amount={4} /><SiWhatsapp color="black"size="2em"/> </a>
        <a id="link3" href="https://github.com/rowshaenah"><Spacer amount={4} /><AiOutlineGithub color="black"size="2em"/> </a>
        <a id="link4" href="https://www.linkedin.com/in/rowshaenah/"><Spacer amount={4} /><AiFillLinkedin color="black"size="2em"/></a>
        <a id="link5" href="tel:+919620880778"><Spacer amount={4} /><MdCall color="black"size="2em"/></a>
        <a id="link6" href = "mailto: roshanrgowda880778@gmail.com"><Spacer amount={4} /><SiGmail color="black"size="2em"/></a></span>
      </div>
    );
  }
}
 
export default Contact;