import React from 'react'
import PlayersSelect from './components/PlayersSelect'
import ExtensionSelect from './components/ExtensionSelect'
import Button from './components/Button'

const Players = ({nextStep}) => {
  return (
    <div>
      <h1>How many players?</h1>
      <PlayersSelect />
      <ExtensionSelect />
      <div>
        <Button onClick={nextStep}>Randomize Factions|Boards</Button>
      </div>
    </div>
  )
}

Players.displayName = 'Players'

export default Players