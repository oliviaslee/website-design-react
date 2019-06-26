// JavaScript Document
import React from "react";
import olivia from "./../assets/img/olivia.jpg"

function Polaroid() {
	return (
		<div style={film} className="column-container">
			<img src={olivia} style={{paddingTop:"5%"}} alt="Portrait polaroid of Olivia Lee" width="90%" height="85%" />
			<p style={{margin:'auto'}}>olivia lee sp'19 </p>
		</div>
	)
}

export default Polaroid;

const film = {
	width:"13em",
	height:"17em",
	marginRight:120,
	backgroundColor:"white",
	boxShadow:"3px 3px 10px rgba(0,0,0, 0.16)",
	display:'flex',
	alignItems:"center",
	justifyContent:"center",
	transform:'rotate(6deg)'
}
