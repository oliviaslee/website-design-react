// JavaScript Document
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//component imports
import Hashtag from "./../components/hashtag.js";

const Describers = ["software developer", "ui designer", "uni student"];

function Landing() {
	return (
		<Page>
			<Title>Olivia Lee</Title>
			<Bio><Hashtag tags={Describers}/></Bio>
			<NavBlock>
				  <ListItem>
					<Link to="/aboutme" className="link-style darken">about</Link>	</ListItem>
				  <ListItem>
					<Link to="/projects" className="link-style darken">projects</Link></ListItem>
				  <ListItem>
					<Link to="/contact" className="link-style darken">contact</Link></ListItem>

			</NavBlock>
		</Page>
	)
}

export default Landing;


const Page = styled.div`
	height:calc(100vh - 68.5px);
	display:flex;
	flex-direction:column;
	justify-content:center;
`;

const Title = styled.h1`
	text-align:center;
	color:#B8B8D1;
	margin-block-end:0;
`;

const Bio = styled.h2`
	display:flex;
	justify-content:center;
	height:1em;
`;

const NavBlock = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-top:2em;
`;

const ListItem = styled.li`
	list-style-type:none;
	text-transform:uppercase;
	text-align:right;
	font-size:.85em;
	padding:0.25em;
`;