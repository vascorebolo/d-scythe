import React from 'react'
import PlayersSelect from './components/PlayersSelect'
import ExtensionSelect from './components/ExtensionSelect'

const Players = ({nextStep}) => {
  return (
    <div>
      <h1>How many players?</h1>
      <PlayersSelect />
      <ExtensionSelect />
      <div><button onClick={nextStep}>Next Step</button></div>
    </div>
  )
}

Players.displayName = 'Players'

export default Players