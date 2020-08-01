import React, { Component } from 'react';

import {
  Environment,
  Route,
  SinglePageApp
} from "infrastructure-components";




class App extends Component {


  render() {
    return (
      <>
        <SinglePageApp
          stackName="menu"
          buildPath='build'
          region='us-east-1'>
          <Environment name="dev" />
          <Route
            path='/'
            name='Infrastructure-Components'
            render={() => <div>Hello Infrastructure-Components!</div>}
          />

        </SinglePageApp>
      </>
    );

  }
}

export default App;
