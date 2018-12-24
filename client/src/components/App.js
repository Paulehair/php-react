import React, { Component } from 'react';
import '../style/App.css';
import Router from './Router';

class App extends Component {
  state = {
    currentIndex: null,
  };

  //
  setIndex = index => {
    //declare a copy of state
    const currentIndex = { ...this.state.currentIndex };
    //create new instance of copy of state
    currentIndex[`index${Date.now()}`] = index;
    this.setState({
      currentIndex: index,
    })
    console.log('Index Set');
  };

  render() {
    return (
      <div className="App">
        <Router setIndex={this.setIndex} />
      </div>
    );
  }
}

export default App;
