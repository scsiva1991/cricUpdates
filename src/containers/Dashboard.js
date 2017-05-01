import React from 'react';
import { render } from 'react-dom';
import * as MatchAction from '../actions/MatchAction.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import Header from './Header';
import CurrentMatches from './CurrentMatches';

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




export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentMatchList: [], matchSummary: {}};
  };

  componentWillMount() {
    console.log(this.props.getCurrentMatchList());
    console.log('-- props --', this.props);

  }

  render() {

    if(this.props && this.props.list) {
      console.log('%%%', this.props.list.matches[0].unique_id, this.props.getMatchSummary(this.props.list.matches[0].unique_id));

      let currentMatches = this.props.list.matches.filter(function(match) {
        return match.matchStarted;
      });
      this.props.getMatchSummary(currentMatches[0].unique_id);
    }

    return (
      <div>
        <div className="container dashboard-container">
          <div className="row">
            <div className="col-xs-6">
              <CurrentMatches matchList = {this.props.list}/>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
