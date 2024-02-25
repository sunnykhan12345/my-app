import React from 'react'
import "./Navbar.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
 const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/*side bar  */}
        <div className="wrapper">
            <span>Sunny</span>

            <div className="social">
                <a href='#'><FaFacebook className='img'/> </a>
                <a href='#'><FaInstagram className='img' /> </a>
                <a href='#'><FaYoutube className='img'/>  </a>
                <a href='#'><FaDribbble className='img'/>  </a>
            </div>
        </div>
      </div>
    </>
  )
}

export default  Navbar
