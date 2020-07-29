import React, { useContext } from 'react'
import PlayersContext from '../contexts/players.context'

const PlayersSelect = () => {
  const { players, changePlayers } = useContext(PlayersContext)
  const options = [2, 3, 4, 5]

  const handleChange = (e) => {
    changePlayers(e.target.value)
  }

  const renderOptions = () => {
    return options.map(option =>
      <div key={option}>
        <label htmlFor={option}>{ option }</label>
        <input
          id={option}
          type="radio"
          name="players"
          value={option}
          onClick={handleChange}
          defaultChecked={players === option}
        />
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