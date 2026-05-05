import React, { Component } from 'react'

 class Hooks extends Component {
  constructor(){
    super();
  this.state = {
    count : 0
  }


}

  componentDidMount(){
    console.log("componentDidMount: when component render first time")
  }

   increasement(){
    this.setState({count : this.state.count + 1})
   }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => {this.increasement()}}>Add</button>
      </div>
    )
  }
}

export default Hooks
