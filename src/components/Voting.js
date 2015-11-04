import React from 'react';
import {connect} from 'react-redux';

import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export class Voting extends React.Component {
  render() {
    return (
      <div>
        {this.props.winner ? null :
          <Vote {...this.props} />}
      </div>
    );
  }
}

Voting.propTypes = {
  winner: React.PropTypes.string,
  hasVoted: React.PropTypes.string,
  pair: React.PropTypes.object,
  vote: React.PropTypes.func,
  next: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner'),
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
