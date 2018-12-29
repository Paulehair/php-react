import React, { Component } from 'react';
import '../style/App.css';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      currentIndex: 0,
    })
  }


  setIndex = index => {
    this.setState({
      currentIndex: index,
    })
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <div className="App">
        <Router currentIndex={currentIndex} setIndex={this.setIndex} />
      </div>
    );
  }
}

export default App;
