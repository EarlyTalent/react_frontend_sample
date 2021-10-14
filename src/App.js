import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <header className="App-header">
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/users/:id'>
                  <></>
                </Route>
              </Switch>
            </BrowserRouter>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
