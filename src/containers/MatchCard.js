import React from 'react';

export default class MatchCard extends React.Component {
  render() {
    return (
      <div className="matchCard">
        <h5 className="matchTitle">{this.props.team1} vs {this.props.team2}</h5>
      </div>
    )
  }
}
