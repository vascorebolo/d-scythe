import React, { useContext } from 'react'
import PlayersContext from '../players.context'

const PlayersSelect = () => {
  const { players, changePlayers } = useContext(PlayersContext)
  const options = [2, 3, 4, 5]

  const handleChange = (e) => {
    console.log(e, players, changePlayers)
  }

  const renderOptions = () => {
    return options.map(option =>
      <div key={option}>
        <label htmlFor={option}>{ option }</label>
        <input id={option} type="radio" name="players" value={option} onClick={handleChange} />
      </div>
    )
  }

  return (
    <div>
      { renderOptions() }
    </div>
  )
}

PlayersSelect.displayName = 'PlayersSelect'

export default PlayersSelect