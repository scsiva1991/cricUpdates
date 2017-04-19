import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import MatchReducer from './MatchReducer.js';

const reducers = combineReducers({
  routing: routerReducer,
  MatchReducer,
  reduxAsyncConnect
});

export default reducers;
