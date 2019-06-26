// JavaScript Document
import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {

	return (
		<div style={dummyDiv}>
			<div style={listContainer}>
			  <ListItem>
				<Link to="/aboutme" className="link-style darken">about</Link></ListItem>
			  <ListItem>
				<Link to="/projects" className="link-style darken">projects</Link></ListItem>
			  <ListItem>
				<Link to="/contact" className="link-style darken">contact</Link></ListItem>
			</div>
		</div>
	)
}

export default Navbar;

//styles
const dummyDiv = {
	height:119
}

const listContainer = {
	width:'100%',
	borderRight:"solid",
	borderWidth:"0.5px",
	borderColor:"rgba(44,66,81,0.8)",
	margin:25,
	paddingRight:8,
	position:'fixed',
	right:0
}

const ListItem = styled.li`
	list-style-type:none;
	text-transform:uppercase;
	text-align:right;
	font-size:0.75em;
	padding:0.1em;
`;
