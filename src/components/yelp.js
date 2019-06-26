// JavaScript Document
import React from 'react'

//import imgs
import Yelp1 from './../assets/img/yelp.svg';
import Yelp2 from './../assets/img/yelp_colored.svg';

class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: Yelp1
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
	
  handleMouseOver() {
    this.setState({
      icon: Yelp2
    });
  }

  handleMouseOut() {
    this.setState({
      icon: Yelp1
    });
  }

  render() {
    return (
	  <a href="https://olivialee.yelp.com" target="_blank">
		<img 
			onMouseOver={this.handleMouseOver} 
			onMouseOut={this.handleMouseOut} 
			src={this.state.icon} 
			alt='Yelp icon and link to profile' 
			style={iconBox}
		/>
	  </a>
    );
  }
}

Yelp.propTypes = {
}

Yelp.defaultProps = {
}

export default Yelp;

const iconBox = {
	height:17,
	width:17,
    padding: "2px 0 0 5px"
}
