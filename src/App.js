import React, { Component } from 'react';
import Homepage from './containers/Homepage.jsx';
import Personal_cabinet from './containers/Personal_cabinet.jsx';
import Personal_cabinet_setting from './containers/Personal_cabinet_setting.jsx';

export default  class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Homepage/>*/}
          {/*<Personal_cabinet/>*/}
          <Personal_cabinet_setting/>
      </div>
    );
  }
}

