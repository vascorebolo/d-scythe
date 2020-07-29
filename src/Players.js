import React from 'react'
import PlayersSelect from './components/PlayersSelect'

const Players = ({previousStep, nextStep, callback}) => {
  return (
    <div>
      <h1 onClick={callback}>How many players?</h1>
      <PlayersSelect />
      <p><button onClick={nextStep}>Next Step</button></p>
    </div>
  )
}

Players.displayName = 'Players'

export default Players