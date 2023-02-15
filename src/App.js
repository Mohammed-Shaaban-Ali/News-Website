import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
