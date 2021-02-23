import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
        </div>
    </BrowserRouter>
  );
}
