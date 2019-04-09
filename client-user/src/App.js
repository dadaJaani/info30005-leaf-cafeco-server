import React, { Component } from 'react'

import Form from './components/Form'
import LogIn from './components/LogIn'

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
          {/*<LogIn/>>*/}
      </div>
    );
  }
}

export default App;
