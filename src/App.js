import './App.css';

import { useEffect, useState } from 'react';

import { TeamsProvider } from '@microsoft/mgt';
import * as microsoftTeams from "@microsoft/teams-js";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from '@microsoft/mgt-react';
import { Providers  } from '@microsoft/mgt-element';

function AuthPage(props) {
  console.log("authpage", props);
  // TeamsProvider.microsoftTeamsLib = microsoftTeams;
  TeamsProvider.handleAuth();
  

  return (
    <div>Auth</div>
  )
}

function Home(){

  function useIsSignedIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    
    useEffect(() => {
      const updateState = () => {
        console.log("state", Providers.globalProvider.state);
        setIsSignedIn(Providers.globalProvider.state === 2)
      };
  
      Providers.onProviderUpdated(updateState);
      updateState();
  
      return () => {
      Providers.removeProviderUpdatedListener(updateState);
      }
    }, []);

    return [isSignedIn];
  }

  useEffect(() => {
    document.querySelector('mgt-login').addEventListener('loginInitiated', e => {
      console.log("loginInitiated", e)
    });

    document.querySelector('mgt-login').addEventListener('loginCompleted', e => {
      console.log("loginCompleted", e)
    });

    document.querySelector('mgt-login').addEventListener('loginFailed', e => {
      console.log("loginFailed", e)
    });
  }, []);

  const [isSignedIn] = useIsSignedIn();

  return (
    <div>
      <Login />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Auth" component={AuthPage} />
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
