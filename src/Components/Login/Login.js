import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { login } from '../../Actions/Auth';
import { userLogin } from '../../Services/UserService';

const Login = (props) => {
  const loginHandle = () => {
    userLogin('asb@xyz.com', 'password')
      .then(res => {
        props.login(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <button onClick={loginHandle}>Login</button>
    </Fragment>
  );
};

export default connect(null, { login })(Login);