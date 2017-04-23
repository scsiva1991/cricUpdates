import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import MatchReducer from './MatchReducer.js';
import MatchSummaryReducer from './MatchSummaryReducer.js';

const reducers = combineReducers({
  routing: routerReducer,
  MatchReducer,
  MatchSummaryReducer,
  reduxAsyncConnect
});

export default reducers;
