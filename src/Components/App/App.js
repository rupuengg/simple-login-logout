import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { PrivateLogin } from '../PrivateLogin/PrivateLogin';
import Login from '../Login/Login';
import Navbar from '../Common/Navbar';

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
        <Navbar />
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
