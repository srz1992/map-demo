import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GoogleApiComponent from './GoogleApiComponent';
import Component from './MapComponent'


ReactDOM.render(<Component />, document.getElementById('root'));
registerServiceWorker();
