import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './utils/Routes';
require('dotenv').config()
const user = require('./actions/User')




const router = (
    <BrowserRouter>
      <div className="entire-app">
        <Route path="/" component={ App }/>
        <Routes current_user={user.getCurrentUserFromCookie()} />
      </div>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();



//ReactDOM.render(<App />, document.getElementById('root'));
