import React from 'react';

export default class Winner extends React.Component {
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
        <button onClick={this.props.restart}>Restart</button>
      </div>
    );
  }
}

Winner.propTypes = {
  winner: React.PropTypes.string,
  restart: React.PropTypes.func,
};
