import React, { Component } from 'react';
import '../style/App.css';

import ArticleContainer from '../views/Article/ArticleContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ArticleContainer />
      </div>
    );
  }
}

export default App;
