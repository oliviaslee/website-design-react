// JavaScript Document
import React from "react";

//component imports
import Typed from './../components/typed.js';
import Polaroid from "./../components/polaroid.js";
import Navbar from './../components/navbar.js';
import Yelp from './../components/yelp.js'

function Story() {	
	return (
		<div>
			<Navbar />
			<div style={container} className="column-container fixed">
				<h1>status update</h1>
				<div className="justified-row">
					<div style={text} className="subcontent-container">
						<h2><Typed string='the rundown.'/></h2>
						<p>
						I’m a rising junior undergrad at UC Berkeley studying computer science and data science with an interest in all things tech, design, and the combination of the two.
						<br/><br/>
						A SoCal native exploring all of what NorCal has to offer.
						<br/><br/>
						Leisure? I really enjoy cafe hopping and discovering hidden-gem restaurants and shops, all while working towards getting the Yelp Elite Status  
							<Yelp />
						<br/><br/>
						Share similar interests or just want to chat? Connect with me! Added bonus for any East Bay cafe recommendations :’)
						</p>
					</div>
					<Polaroid />
				</div>
			</div>
		</div>
	)
}

export default Story;

const text = {
	width:570
}

const container = {
	width:'80vw',
	margin:'auto'
}