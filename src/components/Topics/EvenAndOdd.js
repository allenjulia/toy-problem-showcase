import React, {Component} from 'react'


export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evensArray: [],
      oddsArray: [],
      userInput: ""
    }
    
  }
  render(){
    return (
     <div className="puzzleBox evenAndOddPB">
       <h4>"Evens and Odds"</h4>
       <input onChange={(handleChange)} className="inputLine"></input>
       <button onClick={(handleClick)}className="confirmationButton">Split</button>
       <span className="resultsBox">Evens: {this.setState.evensArray} </span>
       <span className="resultsBox">Odds:{this.setState.oddsArray}</span>
     </div>
    )  
  }
}
