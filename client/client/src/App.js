// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Dashboard from "./views/Dashboard";
import CreateAuthor from "./views/CreateAuthor";
import EditAuthor from "./views/EditAuthor";
import OneAuthor from "./views/OneAuthor";

const Home = () =>{
  return(<div>hello</div>);
};

function App() {
  return (
    <BrowserRouter>
    <div className="container mt-5">
      <h1> Author Board</h1>
      <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/authors/new">
            <CreateAuthor />
          </Route>
          <Route exact path="/authors/update/:id">
            <EditAuthor />
          </Route>
          <Route exact path="/authors/:id">
            <OneAuthor />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
