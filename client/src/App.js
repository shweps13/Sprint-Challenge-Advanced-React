import React from "react";
import './App.css';

import DisplayCard from "./components/DisplayCard"

class App extends React.Component {

    constructor(){
      super();
      this.state = {
        players : []
    };
  }
  

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({players : res}))
      .then(console.log("hook", this.state.players))
      .catch(err => console.log("Something goes wrong with main request"));

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
        </header>
        <DisplayCard players={this.state.players} />
      </div>
    );
  }
}

export default App;