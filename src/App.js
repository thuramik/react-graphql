// Core
import React from 'react';
import { Router } from 'react-router-dom';

// Styles
import './base/reset.scss';

// Routes
import { history } from './navigation/history';
import { Routes } from './navigation';

// Icons
import { initializeIcons } from 'office-ui-fabric-react';

initializeIcons();

export const App = () => (
  <Router history={ history }>
    <Routes />
  </Router>
);
