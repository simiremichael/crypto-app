import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import Store from './store/Store'

ReactDOM.render(
<Router>
<Provider store={Store}>
<App/>
</Provider>
</Router>, 
document.getElementById('root'));