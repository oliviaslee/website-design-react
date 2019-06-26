// JavaScript Document
import React from "react";

//import components
import Icon from './icon.js';

//import icon images
import Linkedin from './../assets/img/footer_linkedin.svg';
import Github from './../assets/img/footer_github.svg';
import Email from './../assets/img/footer_email.svg';

function Footer() {
	return (
		<div style={container}>
			<Icon 
				img={Github}
				alt="Github Link"
				link="https://github.com/oliviaslee"
				size='1.125em'/>
			<Icon 
				img={Linkedin}
				alt="Linkedin Link"
				link="https://www.linkedin.com/in/oliviasulee/"
				size='1em'/>
			<Icon 			
				img={Email}
				alt="Email Link"
				link="mailto:olivia.suji.lee@berkeley.edu?Subject=Opportunity%20to%20connect"
				size='1.125em'/>
		</div>
	)
}

export default Footer;

const container = {
	width:'100vw',
	padding:'0.25em 0em',
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	borderTop:'1px solid rgba(44,66,81,0.1)'
}