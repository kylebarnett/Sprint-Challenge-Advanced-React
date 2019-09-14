import React from 'react';
import { Card } from 'semantic-ui-react'


export default function Player(props) {
  return (
    <div className="player-card">
      <Card>
        <Card.Content>
          <Card.Header color="blue">
            {props.player.name}
          </Card.Header>
          <Card.Meta>
            <span className="date">From {props.player.country}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>Number of Searches: {props.player.searches}</a>
        </Card.Content>
      </Card>
    </div>
  )
}