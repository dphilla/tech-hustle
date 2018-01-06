import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './utils/Routes';
require('dotenv').config()



const router = (
    <BrowserRouter>
      <div className="entire-app">
        <Route path="/" component={ App }/>
        <Routes />
      </div>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();



//ReactDOM.render(<App />, document.getElementById('root'));
