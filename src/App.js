import React from 'react';
import './App.css';
import Home from './components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/:id'>
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
