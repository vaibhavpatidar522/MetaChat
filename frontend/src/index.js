import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/login-page';
import reportWebVitals from './reportWebVitals';
import {Routes, Route} from 'react-router-dom'
import { MemoryRouter as Router} from 'react-router-dom';
import { createMemoryHistory /* , createBrowserHistory */ } from 'history';
import LoginCredPage from './pages/login-cred';
const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createMemoryHistory();
root.render(
    <Router>
    <App/>
   </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
