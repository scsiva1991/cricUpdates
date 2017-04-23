import React from 'react';
import { render } from 'react-dom';
import MatchCard from './MatchCard';

export default class CurrentMatches extends React.Component {
  render() {
    return(
      <div className="currentMatches-container">
        <h2> Current Matches </h2>
        <hr/>
        <div className="matchList">
          {this.props.matchList && this.props.matchList.matches.map(function(match) {
            if( match.matchStarted ) {
              return <MatchCard key={match.unique_id} team1={match['team-1']} team2={match['team-2']}/>;
            }
          })}
        </div>
      </div>
    )
  }
}
