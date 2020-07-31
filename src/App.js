import React, { useState } from 'react';
import './App.css';

import StepWizard from 'react-step-wizard'
import Players from './Players'
import Results from './Results'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'

function App() {
  const [players, setPlayers] = useState(2)
  const [extension, setExtension] = useState(true)
  const changePlayers = (players) => setPlayers(players)

  return (
    <div className="App">
      <PlayersContext.Provider
        value={{
          players,
          changePlayers
        }}
      >
        <ExtensionContext.Provider
          value={{
            extension,
            setExtension
          }}
        >
          <h1>D-Scythe</h1>
          <StepWizard>
            <Players />
            <Results />
          </StepWizard>
        </ExtensionContext.Provider>
      </PlayersContext.Provider>
    </div>
  );
}

export default App;
