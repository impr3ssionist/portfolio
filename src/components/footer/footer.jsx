import React from 'react'
import './Footer.css'
import {BsFacebook} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const footer = () => {
  return (
    <footer>
      <a href ="#" className='footer__logo'>Caleb Ford</a>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/caleb.p.ford.1'><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/caleb-ford13/'><BsLinkedin/></a>
        <a href='https://github.com/impr3ssionist'><BsGithub/></a>
      </div>

      
    </footer>
  )
}

export default footer