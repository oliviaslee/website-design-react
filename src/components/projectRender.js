// JavaScript Document
import React, {Component} from "react";
import styled from 'styled-components';

//import components
import Title from "./../components/projectTitle";
import FlipCard from './../components/projectFlipCard.js';

class Project extends Component {
	render() {
		const {data} = this.props;
		const projList = data.map(proj => {
			return (
				<CardContent key={proj.id}>
					<Centered className='justified-row'>
						<Title 
							listed={proj.id}
							name={proj.name}
							bio={proj.short}
							tag={proj.tag}
							style={{width:'50%'}}
						/>
						<FlipCard
							bio={proj.long}
						/>
					</Centered>
				</CardContent>
			)
		})
	
		return (
			<Card >
			  {projList}
			  <LastCard />
			</Card>
		)
	}
}

export default Project;

const Card = styled.section`
  height:calc(100vh - 119px);
  display: flex;
  overflow-x: auto;
  margin-top:1em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CardContent = styled.div`
  min-width:70vw;
  margin-left:7em;
`;

const LastCard = styled.div`
  margin-left:3.5em;
  min-width:1px;
`;

const Centered = styled.div`
	display:flex;
	align-items:center;
	margin:auto;
	height:90%;
`;

