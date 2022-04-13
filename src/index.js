import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as microsoftTeams from "@microsoft/teams-js";
import { Providers } from '@microsoft/mgt-element';
import { TeamsProvider } from '@microsoft/mgt';

TeamsProvider.microsoftTeamsLib = microsoftTeams;

Providers.globalProvider = new TeamsProvider({
  clientId: `add client id here`,
  scopes: ['calendars.read', 'presence.read.all', 'user.read', 'openid', 'profile', 'people.read', 'user.readbasic.all'],
  authPopupUrl: `${window.location.origin}/Auth`,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
