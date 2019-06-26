// JavaScript Document
import React from "react";

//component imports
import Icon from "./../components/icon.js";
import Typed from './../components/typed.js';
import Navbar from './../components/navbar.js';

//img imports
import Github from "./../assets/img/github.svg";
import Linkedin from "./../assets/img/linkedin.svg";
//import Instagram from "./../assets/img/instagram.svg";
import Email from "./../assets/img/email.svg";
import Resume from "./../assets/img/pdf.svg";

function Contact() {
	return (
		<div>
			<Navbar />
			<div className="column-container fixed" style={container}>
				<h1>digitalized</h1>
				<div className="justified-row">
					<div style={text} className="subcontent-container">
						<h2><Typed string='the usual.'/></h2>
						<p>
						other platforms where I exist in. feel free to connect and chat; both online and in-person are welcome! 
						</p>
					</div>
				</div>
				<div style={contacts} className="row-container">
					<Icon 
						img={Github}
						alt="Github Link"
						link="https://github.com/oliviaslee"
						size='3.75em'
					/>
					<Icon 
						img={Linkedin}
						alt="Linkedin Link"
						link="https://www.linkedin.com/in/oliviasulee/"
						size='3.75em'
					/>
					<Icon 
						img={Email}
						alt="Email Link"
						link="mailto:olivia.suji.lee@berkeley.edu?Subject=Opportunity%20to%20connect"
						size='3.75em'
					/>
					<Icon 
						img={Resume}
						alt="Resume Link"
						link="https://www.dropbox.com/s/xu0x1y9rz8lnojh/%5BOlivia%20Lee%5D%20Resume.pdf?dl=0"
						size='3.75em'
						download='false'
					/>
				</div>
			</div>
		</div>
	)
}

export default Contact;

const container = {
	width:'80vw',
	margin:'auto'
}

const text = {
	width:320
}

const contacts = {
	display:'flex',
	justifyContent:'space-evenly',
	alignItems:'center',
	marginTop:'5em',
	flexWrap:'wrap'
}