import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>{/* <Route exact path="/" component={Homepages} /> */}</Switch>
      </Router>
    </>
  );
};

export default App;
