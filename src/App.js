import React, { Component } from 'react';
import Homepage from './containers/Homepage.jsx';
import Personal_cabinet from './containers/Personal_cabinet.jsx';

export default  class App extends Component {
  render() {
    return (
      <div className="App">
          <Homepage/>
          <Personal_cabinet/>
      </div>
    );
  }
}

