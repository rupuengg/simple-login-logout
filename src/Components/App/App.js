import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { PrivateLogin } from '../PrivateLogin/PrivateLogin';
import Login from '../Login/Login';
import Navbar from '../Common/Navbar';

class Home extends React.Component {
  state = {
    pageTitle: ""
  }

  constructor(props) {
    super(props);
    console.log("Home - Constructor");
  }

  static getDerivedStateFromProps(p, s) {
    console.log("Home - GetDrivedStateFromProps", p, s);
    if (p.title !== s.pageTitle) {
      return {
        pageTitle: p.title
      };
    }
    return null;
  }

  shouldComponentUpdate(p, s) {
    console.log(p, s);
    return true;
  }

  componentDidUpdate(pp, ps, s) {
    console.log("Home - ComponentDidUpdate", pp, ps, s);
  }

  render() {
    console.log("Home - Render");
    return (
      <div>
        <h1>Home Page</h1>
        <p>{this.state.pageTitle}</p>
        <button onClick={this.props.titleChange}>Change Title</button>
      </div>
    );
  }
}

function About() {
  return (<h1>About</h1>);
}

function App() {
  const t = "Home Page";

  const [title, setTitle] = useState(t);

  let countter = 0;
  const titleChange = () => {
    countter = countter++;
    setTitle(t + "-" + countter);
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Route exact path="/login" component={Login}></Route>
          <PrivateLogin exact path="/" component={() => <Home title={title} titleChange={titleChange} />}></PrivateLogin>
          <PrivateLogin exact path="/about" component={About}></PrivateLogin>
        </div>
      </div>
    </Router>
  );
}

export default App;
