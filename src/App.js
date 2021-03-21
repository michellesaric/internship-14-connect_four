import React, {useState} from 'react';
import Game from './components/Game'
import Menu from './components/Menu'
import './styling/App.css';

function App() {

  const [screen, setScreen] = useState("menu");
  const [playerOne, setPlayerOne] = useState({
    name: "",
    score: 0,
    color: "red"
  });

  const [playerTwo, setPlayerTwo] = useState({
    name: "",
    score: 0,
    color: "yellow"
  });

  const setNewScreen = (value) => {
    setScreen(value);
  };

  const setPlayers = (one, two) => {
    setPlayerOne({...playerTwo, name: one});
    setPlayerTwo({...playerTwo, name: two});
  };

  switch(screen) {
    case "menu":
      return <Menu setNewScreen = {setNewScreen} setPlayers = {setPlayers} />
    case "game":
      return <Game />
  }
}

export default App;
