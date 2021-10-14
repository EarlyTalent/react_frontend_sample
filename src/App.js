import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Author from './components/Author';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <header className="App-header">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/users/:id' component={Author} />
            </Switch>
          </header>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
