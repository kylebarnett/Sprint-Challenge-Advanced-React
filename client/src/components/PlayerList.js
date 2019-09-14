import React from 'react';
import Player from './Player';

export default function PlayerList(props) {
  return (
    <div className="player-list-container">
      {props.players.map(player => (
        <Player player={player} key={player.id} />
      ))}
    </div>
  )
}