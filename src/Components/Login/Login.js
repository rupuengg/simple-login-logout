import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { authentication } from '../../Actions/Auth';

const Login = (props) => {
  const loginHandle = () => {
    props.login();
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <button onClick={loginHandle}>Login</button>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: status => dispatch(authentication(status))
  }
}

export default connect(null, mapDispatchToProps)(Login);