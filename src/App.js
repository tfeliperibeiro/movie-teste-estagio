import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Provider from "./context/Provider";
import Home from "./pages/Home";
import Details from "./components/Details";

function App() {
  return (
    <Switch>
      <Provider>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id' component={Details} />
      </Provider>
    </Switch>
  );
}

export default App;
