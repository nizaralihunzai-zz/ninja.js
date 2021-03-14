import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var usersList = JSON.parse(document.getElementById('user-data').dataset.users);
ReactDOM.render(<App rows={usersList} />, document.getElementById('root'));
