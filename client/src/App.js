import React from "react";
import './App.scss';
import { Container, Header, Segment, Grid } from 'semantic-ui-react'

import DisplayCard from "./components/DisplayCard"
import Navbar from "./components/Navbar"

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
        <Navbar />
        <Container text>
      <Segment raised>
      <Header as='h1' textAlign='center'>Players list</Header>
        <Grid columns={1} divided='vertically'>
          <Grid.Row >
        <Grid.Column >
        <DisplayCard players={this.state.players} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
      </div>
    );
  }
}

export default App;