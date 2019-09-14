import React from 'react';
import PlayerList from './components/PlayerList';
import './styles.scss';
import Navbar from './components/NavBar';

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
        <Navbar />
        <h1 style={{ textAlign: 'center' }}>Welcome to the World Cup Database!</h1>
        <p style={{ textAlign: 'center' }}>The data you will see is the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide.</p>
        <PlayerList
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;
