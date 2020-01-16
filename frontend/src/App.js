import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import SignIn from "./components/SignIn";
import Form from "./components/Form";
import NewsFeed from "./components/NewsFeed";

function App() {
  const jwt = useSelector(state => state.jwt);
  const checkJWT = component => (jwt ? component : <Redirect to="/signin" />);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Carousel} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/signin/form" component={Form} />
        {/* <Route path="/newsfeed" render={() => checkJWT(<NewsFeed />)} /> */}
        <Route path="/newsfeed" component={NewsFeed} />
      </Switch>
    </div>
  );
}

export default App;
