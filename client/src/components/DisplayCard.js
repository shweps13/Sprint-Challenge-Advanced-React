import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

function DisplayCard(props) {
console.log("Data received to child: ", props)

  return (
    <div className="DisplayCard">
         <div>
            {props.players.map(player => (
                
            <Card.Group key={player.id}>
                <Card>
                <Card.Content>
                    <Card.Header>{player.name}</Card.Header>
                    <Card.Meta>Searches: {player.searches}</Card.Meta>
                    <Card.Description>County: {player.country}</Card.Description>
                </Card.Content>
                </Card>
            </Card.Group>

          ))}
        </div>
        
    </div>
    
  );
}

export default DisplayCard;
