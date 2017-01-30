// Libs
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// CSS 
import './css/style.css';

//Routes
import routes from './router'

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

// Render
render(
    routes,
  document.getElementById('root')
);