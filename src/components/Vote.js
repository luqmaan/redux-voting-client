import React from 'react';

import Next from './Next';


export default class Vote extends React.Component {
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )}
      </div>
    );
  }
}

Vote.propTypes = {
  hasVoted: React.PropTypes.string,
  pair: React.PropTypes.object,
  vote: React.PropTypes.func,
  next: React.PropTypes.func,
};
