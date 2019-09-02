import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import { PrivateLogin } from '../PrivateLogin';
import Login from '../Login';

function Home() {
  return (<h1>Home</h1>);
}

function About() {
  return (<h1>About</h1>);
}

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
        </ul>
        <div>
          <Route exact path="/login" component={Login}></Route>
          <PrivateLogin exact path="/" component={Home}></PrivateLogin>
          <PrivateLogin exact path="/about" component={About}></PrivateLogin>
        </div>
      </div>
    </Router>
  );
}

export default App;
