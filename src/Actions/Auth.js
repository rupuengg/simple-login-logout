export const login = user => dispatch => {
  let u = JSON.stringify(user);
  localStorage.setItem('user', u);
  dispatch({
    type: 'LOGIN',
    payload: true
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  dispatch({
    type: 'LOGOUT',
    payload: false
  });
};