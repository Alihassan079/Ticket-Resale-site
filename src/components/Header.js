import React from 'react'
import search from "../assets/search.webp";
import { IoIosStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import headerPic from "../assets/hdimg-1.png";
import headerPic2 from "../assets/hdimg-2.png";
import headerPic3 from "../assets/hdimg-3.png";
import headerPic4 from "../assets/hdimg-4.png";
import headerPic5 from "../assets/hdimg-5.png";
import footerPic6 from "../assets/hdimg-6.jpeg";
import card1 from "../assets/visa-1.jpeg";
import card2 from "../assets/mastercard-2.png";
import card3 from "../assets/apple-3.png";
import card4 from "../assets/gpay-4.png";
import card5 from "../assets/paypal-5.png";
import card6 from "../assets/stripe-6.png";
import logo from "../assets/logo1.png";
import social1 from "../assets/fb1.png";
import social2 from "../assets/twi2.png";
import social3 from "../assets/pin3.png";
import social4 from "../assets/you4.png";
import social5 from "../assets/insta5.png";
import social6 from "../assets/hdimg7.png";
import social7 from "../assets/hdimg8.png";
import StarRatingComponent from './Rating-star';
import FixedStarRating from './Rating';

const Header = () => {
  return (
    <>
    <div className='section-1'>
      <div className='sub-header'> 
        <p>Hurray! You are in the right place * 100K+ social media followers * We value every custome</p>
        <h1><span > Purchase Tickets</span> For A <br/>
        Semi Final 1 - T20 Cricket World Cup
         </h1>
         <p>15 MAR, 2024 <br/> Your next best-night-ever is waiting. And we have the tickets.</p>
      </div>
      
      <div >
        <div class="search-box">
        <input type="text" id="input-box" placeholder="search For An Event Here" />
             <div className='search-pic'>
             <img src={search} alt="search" className='search-img'/>
             </div> 
        </div>
          <div className='header-content'>
            <h1>Top Event Lists</h1>
          </div>
          <div className='col-12'>
            <div className='row'>
             <div className='col-4'>
             <img src={headerPic} alt="headerpic"/>
             </div>
             <div className='col-4'>
             <img src={headerPic2} alt="headerpic2"/>
             </div>
             <div className='col-4'>
             <img src={headerPic3} alt="headerpic3"/>
             </div>
            </div>
            </div> 
            </div>
    </div>
    
    <div className='section-2'>
     <h1>Featured Events On Sale Today</h1>
    <div className='col-12'>
      <div className='row'>
      <div className='col-8'>
        <ul className='list'>
          <li>Filter By:</li>
          <li><a href="">ALL</a></li>
          <li><a href="">Sports</a></li>
          <li><a href="">Concerts</a></li>
          <li><a href="">Festivals</a></li>
          <li><a href="">Theaters</a></li>
        </ul>
      </div>
      <div className='col-4'>
        <select className='select-box'>
          <option value="">Pakistan</option>
          <option value="">India</option>
        </select>
      </div>
      </div>
    </div>
    </div>

    <div className='section-3'>
    <div className='col-12 mb-3'>
            <div className='row'>
             <div className='col-4'>
             <img src={headerPic3} alt="headerpic"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic4} alt="headerpic2"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic5} alt="headerpic3"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
            </div>
            </div> 

            <div className='col-12 mb-3'>
            <div className='row'>
             <div className='col-4'>
             <img src={headerPic3} alt="headerpic"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic4} alt="headerpic2"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic5} alt="headerpic3"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
            </div>
            </div> 

            <div className='col-12 mb-3'>
            <div className='row'>
             <div className='col-4'>
             <img src={headerPic3} alt="headerpic"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic4} alt="headerpic2"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
             <div className='col-4'>
             <img src={headerPic5} alt="headerpic3"/>
             <h1>Billy Joel & Stevie Nicks</h1>
             <p>New York, United States</p>
             <span >from $80</span>
             </div>
            </div>
            </div> 
            </div>
    
            <div className='section-4'>
             <div className='sec4-text'>
              <h1>Excellent</h1>
               <StarRatingComponent/>
              <p>Based on <u>1,559 reviews</u> </p>
             <div className='sub-star'>
             <IoIosStar /><span>Trustpilot</span>
             </div>
             </div>
             <div className='back-arrow'>
            <IoMdArrowRoundBack />
            </div> 
             <div className='container'>
              <div className='col-12'>
                <div className='row'>
                  <div className='col-3'>
                  <FixedStarRating/>
                 <div className='rating-text'>
                  <h1>Ecellent service</h1>
                  <p>Exellent service, trusted people,<br/>Sometimes fees are to expensive but ok.
                  <br/>William Castellanos, 3 days ago</p>
                 </div>
                  </div>
                  <div className='col-3'>
                  <FixedStarRating/>
                 <div className='rating-text'>
                  <h1>Ecellent service</h1>
                  <p>Exellent service, trusted people,<br/>Sometimes fees are to expensive but ok.
                  <br/>William Castellanos, 3 days ago</p>
                 </div>
                  </div>
                  <div className='col-3'>
                  <FixedStarRating/>
                 <div className='rating-text'>
                  <h1>Ecellent service</h1>
                  <p>Exellent service, trusted people,<br/>Sometimes fees are to expensive but ok.
                  <br/>William Castellanos, 3 days ago</p>
                 </div>
                  </div>
                  <div className='col-3'>
                  <FixedStarRating/>
                 <div className='rating-text'>
                  <h1>Ecellent service</h1>
                  <p>Exellent service, trusted people,<br/>Sometimes fees are to expensive but ok.
                  <br/>William Castellanos, 3 days ago</p>
                 </div>
                  </div>
                </div>
              </div>
             </div>
             <div className='next-arrow'>
              <FaArrowRight />
            </div>
           </div>

           <div className='section-5'>
              <div className='col-12'>
              <div className='row'>
              <div className='col-6'>
                <div className='part-1'>
                <h1>Join The Newsletter To Learn About Future Events</h1>
                <p>Join The Newsletter To And Get 10% Discount On Your First <br/>
                 Ticket Purchase</p>
                 <input type="text" placeholder='Enter Email Address' className='email-box'/> 
              </div>
               <button className='subs-buttton'>Subscribe</button>
            </div>
            <div className='col-6'>
            <div className='part-2'>
              <img src={footerPic6} alt="footerPic" />
            </div>
            </div>
             </div>
             </div>
           </div>

           <div className='section-6'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-6'>
                  <div className='footer-text'>
                  <h1>PAYMENT</h1>
                  </div>
                  <div className='card-images'>
                  <img src={card1} alt="visa-1" />
                  <img src={card2} alt="mastercard-2" />
                  <img src={card3} alt="apple-3" />
                  <img src={card4} alt="gpay-4" />
                  <img src={card5} alt="paypal-5" />
                  <img src={card6} alt="stripe-6" />
                  </div>
                  <div className='logo-text'>
                  <img src={logo} alt="logo" />
                  <h1>OUR WARRANTY</h1>
                  <p>IF YOU ARE NOT 100% SATUSFIED WE <br/> WILL <br/> REFUND YOU 100% OF YOUR ORDER.</p>
                  <h2>Last Chance Ticket</h2>
                  </div>
                  <div className='end-text'>
                    <h1>Privacy Policies <br/>Terms of service <br/><span>Last Chance Ticket.COM</span> </h1>
                    <h1>Copyright 2007-2024 <br/>Return policies<br/> F.A.Q 1/2 F.A.Q 2/2</h1>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='social-icon'>
                  <h1>SOCIAL MEDIA</h1>
                  <div className='social-images'>
                  <img src={social1} alt="visa-1" />
                  <img src={social2} alt="mastercard-2" />
                  <img src={social3} alt="apple-3" />
                  <img src={social4} alt="gpay-4" />
                  <img src={social5} alt="paypal-5" />
                  </div>
                  <h2>PARTNERS</h2>
                  <div className='scnd-last'>
                  <img src={social6} alt="lastimg" />
                  </div>
                  <div className='last'>
                  <img src={social7} alt="lastimg" />
                  </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
    </>
  )
}

export default Header
