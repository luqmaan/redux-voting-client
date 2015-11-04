import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello</h3>
        <div className="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
