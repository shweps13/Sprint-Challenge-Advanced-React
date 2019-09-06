import React, { Component } from "react";
import './App.css';


class App extends Component {
  constructor(){
    super();
 
  }
  

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => console.log(res))
      // .then(res => this.setState({cards : res}))
      .catch(err => console.log("Something goes wrong with main request"));

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
  
        </header>
      </div>
    );
  }
}

export default App;