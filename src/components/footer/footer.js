import { Link } from 'gatsby';
import React from 'react';
import './style-footer.scss'
import logo from "../../assets/logo.svg"

const Footer = () => (
	<div className='footer-bar'>
        {/* <div className='feet-bar'>
    <div className='logo'> <img src={logo} alt="logo"></img></div>
		<ul className='navigator'>
			<li><a href='#'>Portfolio</a></li>
      <li><a href='#'>About</a></li>
      <li><a href='#'>Contact Me</a></li>
		</ul>
        </div> */}
        <div className='copyright'>
           <h4> © {new Date().getFullYear()}, Built with 
          {` `}
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
          </h4>
        </div>
	</div>
);

export default Footer;
