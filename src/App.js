import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import router from './router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          {router}
        </HashRouter>
      </div>
    );
  }
}

export default App;
