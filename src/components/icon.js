// JavaScript Document
import React from "react";

class Icon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.img,
	  link: props.link,
	  size: props.size,
	  opa: '0.5'
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
	
  handleMouseOver() {
    this.setState({
      opa:'1'
    });
  }

  handleMouseOut() {
    this.setState({
      tint:'gray',
	  opa:'0.5'
    });
  }

  render() {
	if (this.props.download==='true') {
	  return (
      <a href={this.state.link} download>
        <img 
			onMouseOver={this.handleMouseOver} 
			onMouseOut={this.handleMouseOut} 
			src={this.state.imgSrc} 
		  	alt={this.state.alt}
			style={{ opacity: this.state.opa, height:this.state.size, width:this.state.size}}
		/>
      </a>
    );
  	}
    return (
      <a href={this.state.link} target="_blank" rel="noopener noreferrer">
        <img 
			onMouseOver={this.handleMouseOver} 
			onMouseOut={this.handleMouseOut} 
			src={this.state.imgSrc} 
			alt={this.state.alt}
			style={{ opacity: this.state.opa, height:this.state.size, width:this.state.size, padding:15}}
		/>
      </a>
    );
  }
}


Icon.propTypes = {
}

Icon.defaultProps = {
}

export default Icon;