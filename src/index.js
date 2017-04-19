import React from 'react';
import { render } from 'react-dom';
import routes from './routes.js';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers/reducers.js';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import ApiClient from './api/Api.js';
import createStore from './store/configureStore.js';


const client = new ApiClient();
const store = createStore(browserHistory, client, window.__data);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
      <Router
        history={history}
        routes={routes}
        render={props => <ReduxAsyncConnect {...props} />}
      />
    </Provider>,
    document.getElementById('app')
);
