// JavaScript Document
import React from 'react'
import styled from 'styled-components';
//import components
import Typed from './../components/typed.js';

function Intro() {
	return (
		<Text className='subcontent-container'>
			<h2><Typed string='the process.'/></h2>
			<div>
				<Und>interests:</Und> 
				<Indent>UI/UX design, product development, frontend and backend development, interactive hardware</Indent>
			</div>
			<br/>
			<Und>objective:</Und> <Indent>development of applications intended for dynamic interactions with its users--in both a physical and digital sense. achieve such by either introducing new products or recreating and redesigning existing programs.</Indent>
			<br/>
	<Und>production:</Und> <Indent>a human-centered design approach used for majority of my previous and on-going works. repetition is key: multiple iterations of product development, curation, and prototyping.</Indent>

		</Text>	
	)
}

export default Intro;

const Text = styled.div`
	width:570px;
`;

const Und = styled.span`
	border-bottom:3px solid #B8B8D1;
	display: inline-block;
	line-height: 0.65;
`;

const Indent = styled.p`
	margin-left:1em;
`;