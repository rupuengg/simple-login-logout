import { createStore, applyMiddleware } from 'redux';
import reducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;