import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCard from './MediaCard'
import Gate from './Gate'
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <MediaCard title="This is the title" body="This is the body" imageUrl={logo}/>
    <Gate isOpen={true} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
