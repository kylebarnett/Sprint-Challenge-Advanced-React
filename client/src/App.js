import React from 'react';
import PlayerList from './components/PlayerList';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
  }
  
  render() {
    console.log(this.state.players)
    return (
      <div className="App" >
        <PlayerList
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;
