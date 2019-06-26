// JavaScript Document
import React from "react";
import downarrow from "./../assets/img/downarrow.svg";

function ScrollBox() {
	return (
		<div style={footerBlock}>
			<div style={box} className="scroll-box clickable">
				<div style={itemContainer}>
					<div style={scrollText}>scroll down</div>
					<img src={downarrow} alt="down arrow" height="10" width="5"/>
				</div>
			</div>
		</div>
	)
}

export default ScrollBox;

const footerBlock = {
	display:"flex",
	justifyContent:"flex-end",
	margin:25
}

const box = {
	width:120,
	height:35,
	display:"flex",
	flexDirection:"column",
	alignItems:"center",
	justifyContent:'center',
	border:"0.5px solid #2C4251",
	borderRadius:2,
	transition:'all 1000ms linear'
}

const itemContainer = {
	display:"flex",
	flexDirection:"row",
	alignItems:"center"
}

const scrollText = {
	fontFamily:"Quicksand Medium",
	fontSize:15,
	color:"#2C4251",
	paddingRight:10
} 