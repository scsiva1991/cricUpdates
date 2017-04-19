
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import clientMiddleware from '../middlewares/ClientMiddleware.js';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers.js';

export default function createStore(history, client, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  //To add client middleware
  const middleware = [clientMiddleware(client), reduxRouterMiddleware, thunk];

  //To appy middleware to store
  let finalCreateStore = applyMiddleware(...middleware)(_createStore);

  //To add reducers to store
  const store = finalCreateStore(reducers, data);

  return store;
}
