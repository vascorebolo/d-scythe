import React, { useState } from 'react';
import './App.css';

import StepWizard from 'react-step-wizard'
import Players from './Players'
import Results from './Results'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'
import styled from 'styled-components'

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
          <Header>
            <h1>D-Scythe</h1>
          </Header>
          <StepWizard>
            <Players />
            <Results />
          </StepWizard>
        </ExtensionContext.Provider>
      </PlayersContext.Provider>
    </div>
  );
}

const Header = styled.div`
  align-items: center;
  background: #cf4e28;
  color: #fff;
  display: flex;
  height: calc(14px + 6vw);
  justify-content: center;
  left: 0;
  margin: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 3;

  h1 {
    font-size: calc(14px + 4vw);
  }
`

export default App;
