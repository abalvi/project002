import React from 'react';
import './App.css';

// new function MediaCard
// 3 props
// title is rendered inside a <h2> tag
// body is rendered inside a <p> tag
// imageUrl is rendered inside an <img /> tag

function MediaCard({title, body, imageUrl}) {
  return (
      <div className="App"> 
          <h2> {title} </h2>
          <p> {body} </p>
          <img src={imageUrl} alt="logo"/>
      </div>   
  );
}

export default MediaCard;
