// JavaScript Document
import React from 'react';

function FlipCard(props) {
	return (
		<div style={container}>
			{props.bio}
		</div>
	)
}

export default FlipCard;

const container = {
	width:400,
	height:400,
	backgroundColor:'#FFFFFF',
	boxShadow:'3px 3px 10px rgba(0,0,0,0.1)',
	position:'relative',
	top:'10%'
}