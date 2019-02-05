import React, { Component } from 'react';
import '../style/App.scss';
import Router from './Router';
import ReactDOM from 'react-dom';
import Cursor from './Cursor';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      currentIndex: 0,
    })
    this.cursor = []
  }

  getPosition = (event) => {
    let mouseX = event.clientX
    let mouseY = event.clientY + window.scrollY;
    console.log(document.body.scrollTop);

    const svgCursor = ReactDOM.findDOMNode(this.cursor[0])
    this.applyTransform(svgCursor, mouseX, mouseY)
  }

  applyTransform = (el, mouseX, mouseY) => {
    el.style.left = `${mouseX + 1}px`
    el.style.top = `${mouseY + 1}px`
  }


  setIndex = index => {
    this.setState({
      currentIndex: index,
    })
  };

  render() {
    const { currentIndex } = this.state;
    const self = this;
    window.addEventListener('mousemove', function (event) {
      self.getPosition(event)
    })
    return (
      <div className="App">
        <Router currentIndex={currentIndex} setIndex={this.setIndex} />
        <Cursor ref={el => el && this.cursor.push(el)} />
      </div>
    );
  }
}

export default App;
