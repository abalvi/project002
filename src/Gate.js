import React from 'react';

// new function Gate
// 1 props

function Gate({isOpen}) {
    return (
        <div className="App"> 
            <p> {isOpen===true ? "open" : "closed"} </p>
        </div>   
    );
  }
  
export default Gate;
