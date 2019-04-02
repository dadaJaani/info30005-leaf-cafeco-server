import React, { Component } from 'react'

import Home from './components/Home'

import Form from './components/Form'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {

    }
  }

  

  render() {

    return (
      <div >
          <Form/>
          <Home/>
      </div>
    );
  }
}

export default App;
