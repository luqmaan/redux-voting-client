import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';
import Winner from './Winner';
import Next from './Next';


export class Results extends React.Component {
  getPair() {
    return this.props.pair || [];
  }
  getVotes(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  render() {
    return (
      this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} restart={this.props.restart} /> :
        (<div className="results">
          <div className="tally">
            {this.getPair().map(entry =>
              <div key={entry} className="entry">
                <h1>{entry}</h1>
                <div className="voteCount">
                  {this.getVotes(entry)}
                </div>
              </div>
            )}
            <Next next={this.props.next} />
            </div>
          </div>
        )
    );
  }
}

Results.propTypes = {
  pair: React.PropTypes.object,
  tally: React.PropTypes.object,
  winner: React.PropTypes.string,
  next: React.PropTypes.func,
};


function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner'),
  };
}

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);
