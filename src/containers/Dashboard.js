import React from 'react';
import { render } from 'react-dom';
import * as MatchAction from '../actions/MatchAction.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import Header from './Header';
import CurrentMatches from './CurrentMatches';

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

  constructor(props) {
    super(props);
    this.state = {matchList: []};
  };

  componentWillMount() {
    console.log(this.props.getCurrentMatchList());
    console.log('-- props --', this.props);
  }

  render() {
    return (
      <div>
      <Header />
      <div className="container dashboard-container">
        <CurrentMatches matchList = {this.props.list}/>
      </div>
    </div>
    )
  }
}
