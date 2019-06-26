import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

function Test() {
	return (
		<div>
			<Link
				activeClass="active"
				to="section1"
				spy={true}
				smooth={true}
				offset={-70}
				duration= {500}
			>s1 </Link>
		<Link
				activeClass="active"
				to="section2"
				spy={true}
				smooth={true}
				offset={-70}
				duration= {500}
			>s2 </Link>
		<Link
				activeClass="active"
				to="section3"
				spy={true}
				smooth={true}
				offset={-70}
				duration= {500}
			>s3 </Link>
		
			<Box name="section1" > hello </Box>
			<Box name="section2" > hello </Box>
			<Box name="section3" > hello </Box>
		</div>
	)
}


export default Test;

const Box = styled.div`
	height:400px;
	border: solid;
`;


//// JavaScript Document
//import React, {Component} from "react";
//
//import Hashtag from './../components/hashtag.js';
//
//
//class Test extends Component {
//	
//	render() {
//		const {data} = this.props;
//		const projList = data.map(proj => {
//			console.log(proj.tag);
//			return (
//				<div key={proj.id} style={spaced}>
//					{proj.name}, {proj.short}, 
//					<Hashtag tags={proj.tag} />
//				</div>
//			)
//		})
//		
//		return (
//			<div>
//				{projList}
//			</div>
//		)
//	}
//}
//
//export default Test;
//
//const spaced = {
//	paddingTop: 40
//};