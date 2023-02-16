import React from "react";
import "./App.css";
import Header from "./components/Common/Header/Header.jsx";
import Homepages from "./components/home/Homepages";
import Footer from "./components/Common/footer/Footer.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepages} />
          <Route path="/singlepage/:id" exact component={SinglePage} />
          <Route exact path="/culture" component={Culture} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
