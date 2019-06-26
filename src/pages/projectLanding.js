// JavaScript Document
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
 
//import components
import Gallery from './../components/gallery.js'
import Project from './../components/projectRender.js';
import Intro from './../components/projectIntro.js';
import Navbar from './../components/navbar.js';


import Data from './../assets/data/project-data.js';

function projectLanding(props) {
	return (
		<div>
			<Navbar />
			<div style={{overflowY: 'auto', margin:0}} >
				<Link
					activeClass="active"
					to="gallery"
					spy={true}
					smooth={true}
					offset={0}
					duration= {500}
				><Gallery /></Link>

				<Container style={height}>
					<h1>showcased</h1>
					<div className='justified-row'>
					<Intro />
					</div>
				</Container>
				<div name="gallery" ><Project data={Data}/></div>
			</div>
		</div>
	)
}

export default projectLanding;

const Container = styled.div`
	width:80vw;
	margin:auto;
`;

const height = {
	height:'calc(100vh - 119px)'
}
