import React from 'react';

export default class Next extends React.Component {
  render() {
    return (
      <div className="management">
        <button ref="next"
                 className="next"
                 onClick={this.props.next}>
          End Vote
        </button>
      </div>
    );
  }
}

Next.propTypes = {
  next: React.PropTypes.func,
};
