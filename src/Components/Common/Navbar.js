/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { logout } from '../../Actions/Auth';
import { userLogout } from '../../Services/UserService';

const Navbar = (props) => {
  const logoutHandle = e => {
    e.preventDefault();
    userLogout()
      .then(res => {
        props.logout();
        props.history.push("/login");
      });
  }

  return (
    <Fragment>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">AboutUs</Link></li>
      </ul>
      <ul>
        {localStorage.getItem('user')
          ? <li><p>Welcome</p> <a href="#" onClick={logoutHandle}>Logout</a></li>
          : <li><Link to="/login">Login</Link></li>}
      </ul>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default withRouter(connect(mapStateToProps, { logout })(Navbar));