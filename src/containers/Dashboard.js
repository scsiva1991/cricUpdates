import React from 'react';
import { render } from 'react-dom';
import * as MatchAction from '../actions/MatchAction.js';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { asyncConnect } from 'redux-async-connect';
import { bindActionCreators } from 'redux';
import Header from './Header';

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

  componentWillMount() {
    console.log(this.props.getCurrentMatchList());
    console.log('-- props --', this.props);
  }

  render() {
    return (
      <div>
      <Header />
      <div className="container">
        <div className="page-header">
          <h1>Sticky footer </h1>
        </div>
        <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
        <p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="text-muted">Place sticky footer content here.</p>
        </div>
      </footer>
    </div>
    )
  }
}
