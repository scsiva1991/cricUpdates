import React from 'react';
import { render } from 'react-dom';
import * as MatchAction from '../actions/MatchAction.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';

@asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) => {
      const promises = [];
      let p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 10, 'p1');
      });
      let p2 = dispatch(MatchAction.getCurrentMatchList());
      return Promise.all(promises);
    },
  },
])
@connect(
  state => ({
    list: state.MatchReducer.list,
    loading: state.MatchReducer.loading,
    loaded: state.MatchReducer.loaded
  }),
  dispatch => {
    return bindActionCreators(
      Object.assign({}, MatchAction),
      dispatch
    );
  }
)
export default

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    )
  }
}
