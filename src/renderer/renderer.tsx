/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import the styles here to process them with webpack
import '@public/style.css';
import '@public/js/popper.js';
import '@public/js/jquery.js';

import '@public/css/bootstrap-grid.min.css';
import '@public/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <App/>, 
  document.getElementById('app')
);
