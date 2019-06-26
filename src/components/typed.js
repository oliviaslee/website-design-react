// JavaScript Document
import React from "react";
import Typing from 'react-typing-animation';

function Typer(props) {
	return (
		<div>
		  <Typing loop={true} speed={75}>
			<span>{props.string}</span>
			<Typing.Delay ms={1000} />
		  	<Typing.Backspace count={25} speed={50} />
		  </Typing>
		</div>
	)
}

export default Typer;