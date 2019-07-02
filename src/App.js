import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    change: 0
  }

  handleChange = (e) => {
    const count = e.target.value
     this.setState({change: count.length})
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.handleChange}></textarea>
        <div className="counter">{this.state.change}</div>
      </div>
    );
  }
}
export default App;
