// JavaScript Document
import React from "react";
import Typing from 'react-typing-animation';

function Hashtag(props) {
  const info = props.tags;
  const dynamicHash = info.map((hash) =>
	<div key={hash}>
	   <span style={styles}>{hash}</span>
	   <Typing.Delay ms={1000} />
	   <Typing.Backspace count={25} speed={50} />
   </div>
  );
  return (
    <Typing loop={true} speed={75} hideCursor={true}>
		{dynamicHash}
    </Typing>
  );
}

export default Hashtag;

const styles = {
	color:'#628395'
}