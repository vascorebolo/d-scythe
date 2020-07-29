import React, { useState } from 'react';
import './App.css';

import { ALL_FACTIONS } from './constants/factions'
import StepWizard from 'react-step-wizard'
import Players from './Players'
import Results from './Results'
import PlayersContext from './players.context'

function App() {
  const [players, setPlayers] = useState(2)
  const changePlayers = (players) => setPlayers(players)

  return (
    <div className="App">
      <PlayersContext.Provider
        value={{
          players,
          changePlayers
        }}
        >
        <p>{ players }</p>
        <StepWizard>
          <Players />
          <Results />
        </StepWizard>
      </PlayersContext.Provider>
    </div>
  );
}

const renderList = () => ALL_FACTIONS.map(item => <p>{item.name}</p>)

export default App;
