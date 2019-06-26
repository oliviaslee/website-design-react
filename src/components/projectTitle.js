// JavaScript Document
import React from "react";
import Styled from 'styled-components';
//import component
import Hashtag from "./hashtag.js";

function Title(props) {
	return (
		<Container>
			<div style={textOffset}>
				<div style={title}>{props.name}</div>
				<div style={bio}>{props.bio}</div>
			</div>
			<div style={bottom}>
				<div style={faded}>{props.listed}</div>
				<Tags>#<Hashtag tags={props.tag}/></Tags>
			</div>
			
		</Container>
	)
}

export default Title;

const Container = Styled.div`
	width:17em;
	height:17em;
	background-color:#F7F0F5;
	color:#2C4251;
	position:relative;
	bottom:10%;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
`;

const textOffset = {
	position:'relative',
	left:'16%',
    top:'14%',
	width:'110%',
	zIndex:1
}

const bottom = {
	
	width:'100%',
	position:'absolute',
	bottom:0,
	display:'flex',
	flexDirection:'column',
	
}

const title = {
	fontFamily:'Quicksand Medium',
	fontSize:28,
	paddingBottom:'0.1em'
}

const bio = {
	fontFamily:'inherit',
	fontSize:20
}

const faded = {
	fontWeight:'bold',
	fontSize:'7.5em',
	color:"#FFFCF9",
	position:'relative',
    top:'0.52em',
    left:'0.05em'
}

const Tags = Styled.div`
	font-weight:bold;
	font-size:inherit;
	color:#628395;
	padding:0.25em 0.5em;
	position:relative;
	bottom:7%;
	display:flex;
	justify-content:flex-end;
`;