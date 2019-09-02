import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {};
const middleware = [thunk, logger];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;