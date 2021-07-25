import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Provider from './context/Provider';
import Home from './pages/Home';

function App() {
  return (
    <Switch>
      <Provider>
        <Header />
        <Route exact path="/" component={Home} />
      </Provider>
    </Switch>
  );
}

export default App;
