import React, { Component } from 'react';
import '../style/App.css';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      currentIndex: null,
    })
  }


  setIndex = index => {
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
