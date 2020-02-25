import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from '../components/Nav';

import About from '../pages/About';
import Home from '../pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component = {Home} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
