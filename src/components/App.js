import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello</h3>
        {this.props.children}
      </div>
    );
  }
}
