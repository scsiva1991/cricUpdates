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

  componentWillMount() {
    console.log(this.props.getCurrentMatchList());
    console.log('-- props --', this.props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="page-header">
          <h1>Sticky footer with fixed navbar</h1>
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
