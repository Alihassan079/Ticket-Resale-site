import React from 'react'
import contact from "../assets/contact1.png";

const Navbar = () => {
  return (
    <div>
       <nav className="mainnav">
      <ul className='navbar'>
        <li className='text1'>LAST CHANCE TICKET <br/>
        <span className="subtext">Y O U R T R U S T E D T I C K E T S E L L E R</span>
        </li>
        <li className='text2'>100+Social Media Followers</li>
        <li className='text3'>Request Event</li>
        <li className='text4'>Contact Us</li>
        <img src={contact} alt="contact" className='contact-img'/>
        <li><button className='first-button'> Sell Tickets</button></li>
        <li><button className='second-button'>Login</button></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
