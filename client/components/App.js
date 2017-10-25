import React from 'react'
import Greetings from './Greetings'

class App extends React.Component {
  render(){
    return(
      <div className="container">
      <NavigationBar />
      HIHIHIHIHIHIHI
      {this.props.children}
      </div>
    )
  }
}

export default App
